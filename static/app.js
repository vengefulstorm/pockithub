var init = function init() {
    // Check if a new cache is available on page load.
    window.addEventListener('load', function(e) {
        window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                // Browser downloaded a new app cache.
                // Swap it in and reload the page to get the new hotness.
                window.applicationCache.swapCache();
                if (confirm('A new version of this site is available. Load it?')) {
                    window.location.reload();
                }
            } else {
                // Manifest didn't changed. Nothing new to server.
            }
        }, false);
    }, false);

    window.forwardSectionMap = {
        'Issues': 'issues',
        'Milestones': 'milestones',
        'Watchers': 'watchers',
        'Repo Feed': 'repo feed',
        'Commits': 'commits',
        'Code': 'code',
        'Pull Requests': 'pullrequests',
        'User Feed': 'user feed',
        'Profile': 'profile',
        'Followers': 'followers',
        'Following': 'following',
        'User Repos': 'user repos',
        'Starred Repos': 'starred repos'
    }
    
    window.backwardSectionMap = {
        'issues': 'Issues',
        'milestones': 'Milestones',
        'watchers': 'Watchers',
        'repo feed': 'Repo Feed',
        'commits': 'Commits',
        'code': 'Code',
        'pullrequests': 'Pull Requests',
        'user feed': 'User Feed',
        'profile': 'Profile',
        'followers': 'Followers',
        'following': 'Following',
        'user repos': 'User Repos',
        'starred repos': 'Starred Repos'
    }

    window.ctx["upDir"] = [];
    window.ctx["divTypeEnum"] = {"issue-view":1,"code-view":2};
    window.ctx["currentBranch"] = "master";
    window.ctx["sectionToContextMap"] = 
        {
            "issues": "repo",
            "milestones": "repo",
            "watchers": "repo",
            "repo feed": "repo",
            "commits": "repo",
            "code": "repo",
            "pullrequests": "repo",
            "user feed": "user",
            "profile": "user",
            "followers": "user",
            "following": "user",
            "user repos": "repo",
            "starred repos": "repo"
        };
    renderDiv();
    switchToSection();
    setSidebarSection();

// Initialize click handlers
$(".view .header .ui-btn-left", window.ctx["contentWrapper"]).click(function(event) {
    event.stopPropagation();
    toggleSidebar("main-wrapper");
});

$("#sidepanel").panel("option", "classes.panelInner", "custom-ui-panel-inner");

$sidebarWrapper = $("#sidepanel-content");
$sidebarWrapper.delegate(".radio-list .ui-radio label", "click",function(event) {
    event.stopPropagation();
    window.ctx["section"] = window.forwardSectionMap[$(this).siblings("input").val()];
    switchToSection();
    toggleSidebar("main-wrapper");
});

$sidebarWrapper.delegate(".radio-list .ui-radio label", "touchstart", function(event) {
    event.stopPropagation();
    window.ctx["section"] = window.forwardSectionMap[$(this).siblings("input").val()];
    switchToSection();
});

$("[class^=directory-list-item]").live("click",function(event){
    var itemType = $(this).attr('data-type');
    var itemName = $(this).attr('data-name');
    var itemLink = $(this).attr('data-link');
    var itemPath = $(this).attr('data-path');

    if (itemType == 'dir'){
        if ($(this).attr("id") == "upDir"){
            if(window.ctx["upDir"].length > 0){
                switchToSection(window.ctx["upDir"].pop());
            }
        }else{
            updateUpDirContext(itemName,itemLink);
            switchToSection(itemLink);
        }
    }else{
        renderDiv(itemLink,window.ctx["divTypeEnum"]["code-view"]);
    }
});


$("[class^=user-link]").live("click",function(event){
    window.ctx["section"] = 'profile';
    var url = $(this).data("url");
    var clickedUser = $(this).find("[class^=username]").data("username");
    window.ctx["user"]=clickedUser;
    switchToSection(url);
    setSidebarSection();
});

$("li.issue-list-item").live("expand",function(event){
    if ($(".collapsible-content",this).not(":visible")) {
        var url = $(this).data("url");
        renderDiv(url,window.ctx["divTypeEnum"]["issue-view"]);
    }
});

$("[class=repo-list-item]").live("click",function(event){
    //alert($(this).data("full_name"));
    var full_name = $(this).data("full_name");
    var name = $(this).data("name");
    var repo = name;
    var user = full_name.substring(0,full_name.indexOf(repo)-1);
    window.ctx["repo"] = repo;
    window.ctx["user"] = user;
    window.ctx["section"] = "repo feed";
    switchToSection();
    setSidebarSection();
});
};

function selectSectionRadioButton(section) {
    var radioBtnText = window.backwardSectionMap[section];
    // $('#sidepanel-content .radio-list .ui-radio input:radio[value=' + radioBtnText + ']').attr('checked', 'checked').checkboxradio("refresh");
}

$( document ).on( "swiperight", function( e ) {
    if ( e.type === "swiperight" ) {
        $( "#sidepanel" ).panel( "open" );
    }
});

function toggleSidebar(containerId) {
    
    $("#sidepanel").panel("toggle");
    
}

//given api request and id, updates the id with information
function renderDiv(nextRQ, divType) {
    var rq = "";
    var data = {};
    var template;
    var transformer = function(data){ return data; };
    var preProcessor = null;
    if(nextRQ){
        rq = nextRQ;
    }
    
    switch(divType) {
        case window.ctx["divTypeEnum"]["issue-view"]:
            preProcessor = reverseComments;
            template = Handlebars.templates["issue-comments-list"];
            transformer = transformToIssue;
            var issuesNumber = getIssuesNumberFromUrl(rq);
            divId = $("#issues-comments-list-"+issuesNumber);
            break;
        case window.ctx["divTypeEnum"]["code-view"]:
            //TODO: pass in filetype as well
            template = Handlebars.templates["code-view"];
            transformer = transformToCode;
            var filename = extractFilenameFromRequest(nextRQ);
            var filetype = extractFiletypeFromRequest(filename);
            divId = $("#file-"+filename);
            break;
        default:
            return;
    }
    loadTemplatedContent(rq, template, transformer, data, preProcessor, divId);
}

//switches the main content view
function switchToSection(nextRQ) {
    var rq = "";
    var rq2;
    var template;
    var data = {};
    var templateToFill = $("#main-content");
    var transformer = function(data){ return data; }; // initialize to dummy transformer function
    var section = window.ctx["section"];
    if (nextRQ) {
        rq = nextRQ;
    }
    var preProcessor = null;
    switch(section) {    
        case 'repo feed':
            template = Handlebars.templates["child-list"];
            if (!nextRQ) {
                if (window.ctx["pageType"] == "repo") {
                    rq = getRepoFeedRequest(window.ctx["user"], window.ctx["repo"]);
                } else {
                    rq = getFeedRequest(window.ctx["user"]);
                }
            }
            transformer = transformToFeedChild;
            break;
        case 'watchers':
            template = Handlebars.templates["user-list"];
            if (!nextRQ) {
                rq = getWatchersRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToWatcherChild;
            break;
        case 'code':
            template = Handlebars.templates["directory-list"];
            preProcessor = sortDirectory;
                
            if (!nextRQ) {
                rq = getCodeRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToDirectoryItem;
            break;
        case 'commits':
            template = Handlebars.templates["child-list"];
            if (!nextRQ) {
                rq = getCommitsRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToCommitChild;
            break;
        case 'issues':
            template = Handlebars.templates["issue-list"];
            if (!nextRQ) {
                rq = getIssuesRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToIssueChild;
            break;
        case 'milestones':
            template = Handlebars.templates["child-list"];
            if (!nextRQ) {
                rq = getMilestonesRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToMilestoneChild;
            break;
        case 'pullrequests':
            template = Handlebars.templates["pull-request-list"];
            if (!nextRQ){
                rq = getPullRequestsRequest(window.ctx["user"],window.ctx["repo"]);
            }
            transformer = transformToPullRequest;
            break;
        case 'profile':
            template = Handlebars.templates["user-profile"];
            if(!nextRQ){
              rq = getUserRequest(window.ctx["user"]);
            }
            transformer = transformToUserProfile;
            break;
        case 'user feed':
            //pending auth tokens
            //TODO:
            break;
        case 'user repos':
            //pending auth tokens
            template = Handlebars.templates["user-repos"];
            if(!nextRQ){
                rq = getUserRepos(window.ctx["user"]);
            }
            transformer = transformToUserRepos;
            break;
        case 'followers':
            //TODO: take into consideration auth token
            template = Handlebars.templates["followers-view"];
            if(!nextRQ){
                rq = getFollowers(window.ctx["user"]);
            }
            transformer = transformToFollowers;
            break;
        case 'following':
            //TODO: take into consideration auth token
            template = Handlebars.templates["following-view"];
            if(!nextRQ){
                rq = getFollowing(window.ctx["user"]);
            }
            transformer = transformToFollowing;
            break;
        case 'starred repos':
            //TODO: take into consideration auth token
            template = Handlebars.templates["starred-repos-view"];
            if(!nextRQ){
                rq = getStarredRepos(window.ctx["user"]);
            }
            transformer = transformToStarredRepos;
            break;
        default:
            return;
    }
    $("#main-content").html(backwardSectionMap[section]);
    loadTemplatedContent(rq, template, transformer, data, preProcessor, templateToFill);
    window.ctx["pageType"] = window.ctx["sectionToContextMap"][section];
    selectSectionRadioButton(window.ctx["section"]);
}

function setSidebarSection() {
    var list;
    switch(window.ctx["pageType"]) {
        case 'user':
            list = getUserContext();
            break;
        default:
            list = getRepoContext();
    };
    var selectedSection = window.ctx["section"];
    var RadioList = Handlebars.templates["radio-list"];
    var opts = {
        list: list,
        selectedItem: selectedSection,
        containerTheme: window.ctx['containerTheme'],
        childTheme: window.ctx['childTheme'],
        childSelectedTheme: window.ctx['childSelectedTheme']
    }
    var templated = RadioList(opts);
    $("#sidepanel-content").html(templated).trigger("create");    
    selectSectionRadioButton(window.ctx["section"]);
}

function getRepoContext() {
    return [
        {item: "Repo Feed", idx: 0},
        {item: "Commits", idx: 1},
        {item: "Code", idx: 2},
        {item: "Pull Requests", idx: 3},
        {item: "Issues", idx: 4},
        {item: "Milestones", idx: 5},
        {item: "Watchers", idx: 6}
    ]
}

function getUserContext() {
    return [
        {item: "Profile", idx:0},
        {item: "User Feed", idx:1},
        {item: "User Repos", idx:2},
        {item: "Followers", idx:3},
        {item: "Following", idx:4},
        {item: "Starred Repos", idx:5}
    ]
}

function loadTemplatedContent(rq, template, transformer, data, preProcessor, templateToFill) {
    var access_token = window.ctx["user_token"];
    if (typeof access_token === 'undefined') {
        access_token = window.ctx["public_token"];
    }
    
    if (typeof access_token !== 'undefined') {
        data["access_token"] = access_token;
    }
    
    $.ajax({
        type: 'GET',
        url: rq,
        data: data,
        dataType: 'jsonp',
        success: function(data) {
            var opts = {
                containerTheme: window.ctx['containerTheme'],
                childTheme: window.ctx['childTheme']
            }

            if (data.data.length) {
              opts["list"] = $.map(data.data, transformer);
            }else{
              opts["list"] = [data.data];
            }

            if (preProcessor) {
                opts = preProcessor(opts);
            }
            var templated = template(opts);
            templateToFill.html(templated).trigger("create").scrollTop(0);
            console.log(templated);
            console.log(templateToFill)
        },
        error: function() { 
            alert("Error on retrieving: " + rq);
        }
    });
}

function transformToMilestoneChild(jsonItem) {
    var child = {
        "type": "milestone",
        "content": jsonItem
    };
    return transformToChild({}, child);
}

function transformToIssueChild(jsonItem) {
    var child = {
        "type": "issue",
        "content": jsonItem,
        "children_url": jsonItem["comments_url"]
    };
    return transformToChild(jsonItem["user"], child);
}

function transformToWatcherChild(jsonItem) {
    var child = {
        "type": "watcher",
        "content": jsonItem
    };
    return transformToChild(jsonItem, child);
}

function transformToCommitChild(jsonItem) {
    var child = {
        "type": "commit",
        "content": jsonItem["commit"]
    };
    return transformToChild(jsonItem["author"], child);
}

function transformToFeedChild(jsonItem) {
    var child = {
        "type": jsonItem["type"],
        "content": jsonItem["payload"],
        "target": jsonItem["repo"]
    };
    return transformToChild(jsonItem["actor"], child);
}

function transformToChild(userItem, child) {
    userItem = (typeof userItem === 'undefined') ? {} : userItem;
    child = (typeof child === 'undefined') ? {} : child;
    child["user_name"] = userItem["login"];
    child["user_url"] = userItem["url"];
    child["avatar_url"] = userItem["avatar_url"];
    return child;
}

function transformToDirectoryItem(jsonItem) {
    var dirItem = {
        // flatten json object to required fields in template
        type: jsonItem["type"],
        link: jsonItem["_links"]["self"],
        name: jsonItem["name"],
        path: jsonItem["path"],
        sha:  jsonItem["sha"],
        haveUpDir: true 
    }
    return dirItem;
}

function transformToUserProfile(jsonItem) {
    var userProfileItem = {
        login: jsonItem["login"],
        id: jsonItem["id"],
        avatar_url: jsonItem["avatar_url"],
        gravatar_id: jsonItem["gravatar_id"],
        url: jsonItem["url"],
        name: jsonItem["name"],
        company: jsonItem["company"],
        blog: jsonItem["blog"],
        location: jsonItem["location"],
        email: jsonItem["email"],
        hireable: jsonItem["hireable"],
        bio: jsonItem["bio"],
        public_repos: jsonItem["public_repos"],
        public_gists: jsonItem["public_gists"],
        followers: jsonItem["followers"],
        following: jsonItem["following"],
        html_url: jsonItem["html_url"],
        created_at: jsonItem["created_at"],
        type: jsonItem["type"]
    }
    return userProfileItem;
}

function transformToIssue(jsonItem){
    return jsonItem;
}

function transformToCode(fileInfo){
    //alert(fileInfo["content"]);
    return fileInfo;
}

function transformToUserRepos(jsonItem){
    return jsonItem;
}

function transformToFollowers(jsonItem){
    return jsonItem;
}

function transformToFollowing(jsonItem){
    return jsonItem;
}

function transformToStarredRepos(jsonItem){
    return jsonItem;
}

function transformToPullRequest(jsonItem){
    return jsonItem;
}

function sortDirectory(opts) {
    var dir = opts.list;
    dir.sort(sortByName).sort(sortByType);
    return opts;
}

//internal functions for sorting
function sortByType(a, b){
    var typeA = a.type;
    var typeB = b.type;

    if (typeA <= typeB){ //sorting "dir" type before "file" type
        return -1; 
    }else{
        return 1;
    }
}

function sortByName(a, b){
    var typeA = a.name;
    var typeB = b.name;

    if (typeA <= typeB){ //sorting "dir" type before "file" type
        return -1; 
    }else{
        return 1;
    }
}

function reverseComments(opts){
    var commentList = opts['list'];
    opts['list'] = commentList.reverse();
    return opts;
}

function getIssuesNumberFromUrl(rq){
    var issuesNumber = rq.split("issues/")[1];
    return issuesNumber.substring(0,issuesNumber.indexOf("/comments"));
}

function extractFilenameFromRequest(request) {
    var filename = request.substring(request.lastIndexOf('/')+1);
    filename = filename.replace(".","\\.");
    return filename;
}

function extractFiletypeFromRequest(filename){
    var index = filename.lastIndexOf('.');
    if (index == -1){
        return "";
    }else{
        //if filename ends with ".", it'll still return an empty string
        return filename.substring(index+1);
    }
}

function updateUpDirContext(name,link){
    var index = link.indexOf(name);
    var upDir = link.substring(0,index-1);
    window.ctx["upDir"].push(upDir);
}
