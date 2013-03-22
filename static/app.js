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

        $("#sidepanel-subheader, #sidebar-select").show();
        
    window.languageExtensionMap = {
        'as': 'actionscript',
        'ada': 'ada',
        'asm': 'asm',
        'c': 'c',
        'h': 'c',
        'cpp': 'c++',
        'hpp': 'c++',
        'cs': 'c#',
        'clj': 'closure',
        'coffee': 'coffeescript',
        'litcoffee': 'coffeescript',
        'cfm': 'coldfusion',
        'lisp': 'lisp',
        'pas': 'delphi',
        'dfm': 'delphi',
        'di': 'd',
        'd': 'd',
        'dart': 'dart',
        'erl': 'erlang',
        'f90': 'fortran',
        'f95': 'fortran',
        'f03': 'fortran',
        'f': 'fortran',
        'for': 'fortran',
        'fs': 'f#',
        'hs': 'haskell',
        'java': 'java',
        'js': 'javascript',
        'lua': 'lua',
        'm': 'objectivec',
        'php': 'php',
        'phtml': 'php',
        'php4': 'php',
        'php3': 'php',
        'php5': 'php',
        'phps': 'php',
        'pl': 'perl',
        'pm': 'perl',
        'ps': 'postscript',
        'py': 'python',
        'rb': 'ruby',
        'rc': 'rust',
        'rs': 'rust',
        'scala': 'scala',
        'ss': 'scheme',
        'scm': 'scheme',
        'tcl': 'tcl',
        'v': 'verilog',
        'vb': 'visualbasic',
    }

    window.forwardSectionMap = {
        'Issues': 'issues',
        'Milestones': 'milestones',
        'Watchers': 'watchers',
        'RepoFeed': 'repofeed',
        'Commits': 'commits',
        'Code': 'code',
        'PullRequests': 'pullrequests',
        'UserFeed': 'userfeed',
        'Profile': 'profile',
        'Followers': 'followers',
        'Following': 'following',
        'UserRepos': 'userrepos',
        'Starred': 'starred'
    }
    
    window.backwardSectionMap = {
        'issues': 'Issues',
        'milestones': 'Milestones',
        'watchers': 'Watchers',
        'repofeed': 'RepoFeed',
        'commits': 'Commits',
        'code': 'Code',
        'pullrequests': 'PullRequests',
        'userfeed': 'UserFeed',
        'profile': 'Profile',
        'followers': 'Followers',
        'following': 'Following',
        'userrepos': 'UserRepos',
        'starred': 'Starred'
    }

    window.ctx["upDir"] = [];
    window.ctx["divTypeEnum"] = {"issue-view":1,
                                "code-view":2,
                                "pull-request-commits":3,
                                "pull-request-comments":4,
                                "pull-request-files":5};

    window.ctx["currentBranch"] = "master";
    window.ctx["sectionToContextMap"] = {
        "issues": "repo",
        "milestones": "repo",
        "watchers": "repo",
        "repofeed": "repo",
        "commits": "repo",
        "code": "repo",
        "pullrequests": "repo",
        "userfeed": "user",
        "profile": "user",
        "followers": "user",
        "following": "user",
        "userrepos": "repo",
        "starred": "repo"
    };
    
    $searchResults = $("#search-results");    
    var $repoResultsContainer = $("#repo-search-results", $searchResults);
    var $userResultsContainer = $("#user-search-results", $searchResults);
    $searchResults.hide();
    $("#search-bar").change(function(event, ui) {
        var query = $(event.target).val();
        if (query.length > 0) {
            var rqPre = "https://api.github.com/legacy/";
            var rqPost = "/search/" + query;
            var rqRepo = rqPre + "repos" + rqPost;
            var rqUser = rqPre + "user" + rqPost;
            
            $repoResultsContainer.html('');
            $userResultsContainer.html('');
            $searchResults.show();
            $.when($.ajax({
                type: 'GET',
                url: rqRepo,
                data: {},
                // beforeSend: function() { 
                    // var optionsHash = {
                        // message:"<img src='/static/ajax-loader.gif'/>",
                        // css: { 
                            // border: 'none', 
                            // padding: '0px', 
                            // backgroundColor: '#000', 
                            // '-webkit-border-radius': '10px', 
                            // '-moz-border-radius': '10px', 
                            // opacity: .5, 
                            // color: '#fff',
                            // fadeIn: 100,
                            // fadeOut: 300
                        // }
                    // };
                    // $searchResults.block(optionsHash);
                // },
                dataType: 'jsonp',
                error: function() { 
                    alert("Error on retrieving: " + rqRepo);
                }
            }),    $.ajax({
                type: 'GET',
                url: rqUser,
                data: {},
                dataType: 'jsonp',
                error: function() { 
                    alert("Error on retrieving: " + rqUser);
                }
            })).done(function(repoResults, userResults) {
                //$searchResults.unblock();
                var repoOpts = {
                    containerTheme: window.ctx['containerTheme'],
                    childTheme: window.ctx['childTheme'],
                    list: repoResults[0].data.repositories,
                    title: "Repositories"
                }
                var userOpts = {
                    containerTheme: window.ctx['containerTheme'],
                    childTheme: window.ctx['childTheme'],
                    list: userResults[0].data.users,
                    title: "Users"
                }

                $("#sidepanel-subheader, #sidepanel-content").hide();
                var template = Handlebars.templates["search-results-list"];
                var repoResultsTemplated = template(repoOpts);
                $repoResultsContainer.html(repoResultsTemplated).trigger("create");
                
                var userResultsTemplated = template(userOpts);
                $userResultsContainer.html(userResultsTemplated).trigger("create");
                $searchResults.collapsibleset("refresh");
            });
        } else {
            $("#sidepanel-subheader, #sidepanel-content").show();
            $searchResults.hide();
            $repoResultsContainer.html('');
            $userResultsContainer.html('');
        }
    });
    
    setSidebarSection();
    switchToSection();

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
    closeSidebar();
});

$sidebarWrapper.delegate(".radio-list .ui-radio label", "touchstart", function(event) {
    event.stopPropagation();
    window.ctx["section"] = window.forwardSectionMap[$(this).siblings("input").val()];
    switchToSection();
    closeSidebar();
});

$(".directory-list-item").live("expand", function(event) {
    var itemLink = $(this).attr('data-link');
    renderDiv(itemLink,window.ctx["divTypeEnum"]["code-view"]);
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
    window.ctx["section"] = "repofeed";
    switchToSection();
    setSidebarSection();
});

$("[class^=pull-request-commits-button]").live("click",function(event){
    var number = $(this).data("number");
    var url = $(this).data("url");
    //window.ctx["section"] = "commit";
    renderDiv(url,window.ctx["divTypeEnum"]["pull-request-commits"],number);
});

$("[class^=pull-request-comments-button]").live("click",function(event){
    var number = $(this).data("number");
    var url = $(this).data("url");
    renderDiv(url,window.ctx["divTypeEnum"]["pull-request-comments"],number);
});

$("[class^=pull-request-files-button]").live("click",function(event){
    var number = $(this).data("number");
    var url = $(this).data("url");
    renderDiv(url,window.ctx["divTypeEnum"]["pull-request-files"],number);
});

$("[class^=pull-request-commit-view]").live("click",function(event){
    var url = $(this).data("url");
    window.ctx["user"] = $(this).data("user"); 
    window.ctx["section"] = "commit";
    switchToSection(url);
    setSidebarSection();
});

$("[class^=starred-repo-list-item]").live("click",function(event){
    window.ctx["repo"] = $(this).data("name");
    window.ctx["user"] = $(this).data("owner");
    window.ctx["section"] = "repofeed";
    switchToSection();
    setSidebarSection();
});

$("[class^=commit-link]").live("click",function(event){
    var url = $(this).data("url");
    window.ctx["section"] = "commit";
    switchToSection(url);
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

function toggleSidebar() {
    $("#sidepanel").panel("toggle");
    
}

function closeSidebar() {
    $("#sidepanel").panel("close");
}

//given api request and id, updates the id with information
function renderDiv(nextRQ, divType, id) {
    var rq = "";
    var data = {};
    var template;
    var divId;
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
        case window.ctx["divTypeEnum"]["pull-request-commits"]:
            template = Handlebars.templates["pull-request-commits-list"];
            divId = $("#pull-request-commits-list-"+id);
            break;
        case window.ctx["divTypeEnum"]["pull-request-comments"]:
            template = Handlebars.templates["pull-request-comments-list"];
            divId = $("#pull-request-comments-list-"+id);
            break;
        case window.ctx["divTypeEnum"]["pull-request-files"]:
            template = Handlebars.templates["pull-request-files-list"];
            divId = $("#pull-request-files-list-"+id);
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
    //var templateToFill = $("#main-content");
    var templateToFill = null;
    var transformer = function(data){ return data; }; // initialize to dummy transformer function
    var section = window.ctx["section"];
    if (nextRQ) {
        rq = nextRQ;
    }
    var preProcessor = null;
    switch(section) {    
        case 'repofeed':
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
            template = Handlebars.templates["commit-list"];
            if (!nextRQ) {
                rq = getCommitsRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToCommitChild;
            break;
        case 'commit':
            template = Handlebars.templates["commit-view"];
            if (!nextRQ){
                rq = getCommitsRequest(window.ctx["user"], window.ctx["repo"], window.ctx["item_id"]);
            }
            transformer = transformToCommitViewChild;
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
        case 'userfeed':
            //pending auth tokens
            //TODO:
            template = Handlebars.templates["user-feed"];
            if(!nextRQ){
                rq = getUserNotifications();
            }
            transformer = transformToUserFeed;
            break;
        case 'userrepos':
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
        case 'starred':
            //TODO: take into consideration auth token
            template = Handlebars.templates["starred-repos-view"];
            data["direction"] = "asc";
            if(!nextRQ){
                rq = getStarredRepos(window.ctx["user"]);
            }
            transformer = transformToStarredRepos;
            break;
        default:
            return;
    }
    $("#main-header .subheader").html(backwardSectionMap[section]);
    loadTemplatedContent(rq, template, transformer, data, preProcessor, templateToFill);
    window.ctx["pageType"] = window.ctx["sectionToContextMap"][section];
    selectSectionRadioButton(window.ctx["section"]);
}

function setSidebarSection() {
    var list;
    var sidebarTitle;
    switch(window.ctx["pageType"]) {
        case 'user':
            list = getUserContext();
            sidebarTitle = window.ctx["user"];
            break;
        default:
            list = getRepoContext();
            sidebarTitle = window.ctx["user"] + "/" + window.ctx["repo"];
    };
    updateSidebarHeader(sidebarTitle);
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
        {item: "RepoFeed", idx: 0},
        {item: "Commits", idx: 1},
        {item: "Code", idx: 2},
        {item: "PullRequests", idx: 3},
        {item: "Issues", idx: 4},
        {item: "Milestones", idx: 5},
        {item: "Watchers", idx: 6}
    ]
}

function getUserContext() {
    return [
        {item: "Profile", idx: 0},
        {item: "UserFeed", idx: 1},
        {item: "UserRepos", idx: 2},
        {item: "Followers", idx: 3},
        {item: "Following", idx: 4},
        {item: "Starred", idx: 5}
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
        beforeSend: function() { 
            var optionsHash = {message:"<img src='/static/ajax-loader.gif'/>" ,css: { 
                                border: 'none', 
                                padding: '0px', 
                                backgroundColor: '#000', 
                                '-webkit-border-radius': '10px', 
                                '-moz-border-radius': '10px', 
                                opacity: .5, 
                                color: '#fff',
                                fadeIn: 100,
                                fadeOut: 300
                            } };
            if (templateToFill == null){
                $.blockUI(optionsHash);
                templateToFill = $("#main-content");
            }else{
                templateToFill.block(optionsHash);
            }
        },
        success: function(data) {
            if ([400,404,422].indexOf(data.meta.status) > -1) {
                // Error redirection
                window.location.href = "/error?code=" + data.meta.status;
            } else if([301,302,307].indexOf(data.meta.status) > -1) {
                // API redirection
                var redirRq = xhr.getResponseHeader("Location");
                loadTemplatedContent(redirRq, template, transformer, data, preProcessor, templateToFill);
            } else { 
                var opts = {
                    containerTheme: window.ctx['containerTheme'],
                    childTheme: window.ctx['childTheme']
                }

                if (data.data.length) {
                  opts["list"] = $.map(data.data, transformer);
                }else{
                  opts["list"] = [transformer(data.data)];
                }
                $.unblockUI();

                if (preProcessor) {
                    opts = preProcessor(opts);
                }
                var templated = template(opts);
                templateToFill.html(templated).trigger("create").scrollTop(0);
            }
        },
        error: function(xhr) { 
            window.location.href = "/error?code=" + xhr.status;
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
        "content": jsonItem//jsonItem["commit"]
    };
    return transformToChild(jsonItem["author"], child);
}

function transformToFeedChild(jsonItem) {
    var child = {
        "type": jsonItem["type"],
        "content": jsonItem["payload"],
        "target": jsonItem["repo"],
        "created_at": jsonItem["created_at"]
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
    // TODO: generate file raw url and render
    var filename = fileInfo["name"];
    var isImage = /\.(jpg|jpeg|png|gif|ico)$/i.test(filename);
    var branch = typeof window.ctx["branch"] === 'undefined'? 'master': window.ctx["branch"];
    var rawUrl = fileInfo["url"].replace(/^https:\/\/api.github.com\/repos/,"https://raw.github.com").replace(/^(https:\/\/[^\/]+\/[^\/]+\/[^\/]+\/)contents(\/.*)/,"$1" + branch + "$2");
    var extIdx = filename.lastIndexOf('.');
    var ext = extIdx < 0 || extIdx == filename.length-1? '': filename.substr(extIdx+1);
    var info = {
        content: fileInfo,
        render_type: isImage? 'image': 'markdown',
        raw_url: rawUrl,
        file_ext: ext
    }
    return info;
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

function transformToUserFeed(jsonItem){
    return jsonItem;
}

function transformToCommitViewChild(jsonItem){
    return jsonItem;
}

function sortDirectory(opts) {
    var dir = opts.list;
    dir.sort(sortByName).sort(sortByType);
    if (opts.list[0]["path"].indexOf("/") == -1){
        opts["isRoot"] = true;
    }else{
        opts["isRoot"] = false;
    }
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

function updateSidebarHeader(name){
    $("#sidepanel-subheader, .ui-select").find("select").find("option").attr("value",name).html(name);
    $("sidepanel-subheader, .ui-select").find(".ui-btn-text").find("span").html(name);
}
