var init = function init() {
    window.forwardSectionMap = {
        'Issues': 'issues',
        'Milestones': 'milestones',
        'Watchers': 'watchers',
        'Repo Feed': 'repo feed',
        'User Feed': 'user feed',
        'Commits': 'commits',
        'Code': 'code',
        'Profile': 'profile',
        'Followers': 'followers',
        'Following': 'following',
        'Repos': 'repos',
        'Starred Repos': 'starred repos'
    }
    
    window.backwardSectionMap = {
        'issues': 'Issues',
        'milestones': 'Milestones',
        'watchers': 'Watchers',
        'repo feed': 'Repo Feed',
        'user feed': 'User Feed',
        'commits': 'Commits',
        'code': 'Code',
        'profile': 'Profile',
        'followers': 'Followers',
        'following': 'Following',
        'repos': 'Repos',
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
            "repo Feed": "repo",
            "commits": "repo",
            "code": "repo",
            "user Feed": "user",
            "profile": "user",
            "followers": "user",
            "following": "user",
            "repos": "repo",
            "starred Repos": "repo"
        };
    renderDiv();
    switchToSection();
    setSidebarSection();

// Initialize click handlers
$(".view .header .ui-btn-left", window.ctx["contentWrapper"]).click(function(event) {
    event.stopPropagation();
    toggleSidebar("main-wrapper");
});
$contentWrapper = $(window.ctx["contentWrapper"]);
$radioWrapper = $contentWrapper.find(".sidebar .content .radio-list .ui-radio label");
$radioWrapper.bind("touchstart", function(event) {
    event.stopPropagation();
    window.ctx["section"] = window.forwardSectionMap[$(this).siblings("input").val()];
    switchToSection();
});
$radioWrapper.bind("click", function(event) {    
    event.stopPropagation();
    window.ctx["section"] = window.forwardSectionMap[$(this).siblings("input").val()];
    switchToSection();
    toggleSidebar("main-wrapper");
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
    var obj1 = $(this).data("url");
    switchToSection(obj1);
    setSidebarSection();
});

$("li.issues-list-item").live("expand",function(event){
    if ($(".collapsible-content",this).not(":visible")) {
        var url = $(this).data("url");
        renderDiv(url,window.ctx["divTypeEnum"]["issue-view"]);
    }
});
};

function selectSectionRadioButton(section) {
    var radioBtnText = window.backwardSectionMap[section];
    $('.sidebar .content .radio-list .ui-radio input:radio[value=' + radioBtnText + ']').attr('checked', 'checked').checkboxradio("refresh");
}

function toggleSidebar(containerId) {
    var $container = $("#" + containerId);
    var $sidebar = $(".sidebar", "#" + containerId);
    var containerLeftAnchor = parseFloat($container.css('left'));
    if (containerLeftAnchor == 0) {
        $("#" + containerId).animate({left: -$sidebar.width()}, 500);
    } else {
        $("#" + containerId).animate({left: 0}, 500);
    }
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
    var templateToFill = $(".view .content", window.ctx["contentWrapper"]);
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
        case 'profile':
            template = Handlebars.templates["user-profile"];
            if(!nextRQ){
              rq = getUserRequest(window.ctx["user"]);
            }
            transformer = transformToUserProfile;
            break;
        default:
            return;
    }
    $(".view .subheader", window.ctx["contentWrapper"]).html(backwardSectionMap[section]);
    loadTemplatedContent(rq, template, transformer, data, preProcessor, templateToFill);
    window.ctx["pageType"] = window.ctx["sectionToContextMap"][section];

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
    $(".sidebar .content", window.ctx["contentWrapper"]).html(templated).trigger("create");    
    selectSectionRadioButton(window.ctx["section"]);
}

function getRepoContext() {
    return [
        {item: "Repo Feed", idx: 0},
        {item: "Commits", idx: 1},
        {item: "Code", idx: 2},
        {item: "Issues", idx: 3},
        {item: "Milestones", idx: 4},
        {item: "Watchers", idx: 5}
    ]
}

function getUserContext() {
    return [
        {item: "Profile", idx:0},
        {item: "User Feed", idx:1},
        {item: "Repos", idx:2},
        {item: "Followers", idx:3},
        {item: "Following", idx:4},
        {item: "Starred Repos", idx:5}
    ]
}

function loadTemplatedContent(rq, template, transformer, data, preProcessor, templateToFill) {
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
        sha:  jsonItem["sha"]
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
