$(function() {
window.ctx = {
    pageType: "repo",
    user: "vengefulstorm",
    repo: "pockithub",
    section: "Watchers",
    subSection: "",
    contentWrapper: "#main-wrapper",
    containerTheme: "c",
    childTheme: "c",
    childSelectedTheme: "c"
}

switchToSection();
initSidebarSections();

// Initialize click handlers
$(".view .header .ui-btn-left", window.ctx["contentWrapper"]).click(function(event) {
    event.stopPropagation();
    toggleSidebar("main-wrapper");
});
$contentWrapper = $(window.ctx["contentWrapper"]);
$radioWrapper = $contentWrapper.find(".sidebar .content .radio-list .ui-radio label");
$radioWrapper.bind("touchstart", function(event) {
    event.stopPropagation();
    window.ctx["section"] = $(this).siblings("input").val();
    switchToSection();
});
$radioWrapper.bind("click", function(event) {    
    event.stopPropagation();
    window.ctx["section"] = $(this).siblings("input").val();
    switchToSection();
});

$("[class^=directory-list-item]").live("click",function(event){
    var itemType = $(this).attr('data-type');
    var itemName = $(this).attr('data-name');
    var itemLink = $(this).attr('data-link');

    if (itemType == 'dir'){
      switchToSection(itemLink);
    }else{
      showFileContents(itemName); 
    } 
});
});

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

function switchToSection(nextRQ) {
    var rq = "";
    var template;
    var data = {};
    var transformer = function(data){ return data; }; // initialize to dummy transformer function
    var section = window.ctx["section"];
    if (nextRQ) {
        rq = nextRQ;
    }
    var preProcessor = null;
    switch(section) {    
        case 'Feed':
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
        case 'Watchers':
            template = Handlebars.templates["user-list"];
            if (!nextRQ) {
                rq = getWatchersRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToWatcherChild;
            break;
        case 'Code':
            template = Handlebars.templates["directory-list"];
            preProcessor = sortDirectory;
                
            if (!nextRQ) {
                rq = getCodeRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToDirectoryItem;
            break;
        case 'Commits':
            template = Handlebars.templates["child-list"];
            if (!nextRQ) {
                rq = getCommitsRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToCommitChild;
            break;
        case 'Issues':
            template = Handlebars.templates["child-list"];
            if (!nextRQ) {
                rq = getIssuesRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToIssueChild;
            break;
        case 'Milestones':
            template = Handlebars.templates["child-list"];
            if (!nextRQ) {
                rq = getMilestonesRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToMilestoneChild;
            break;
        default:
            return;
    }
    $(".view .subheader", window.ctx["contentWrapper"]).html(section);
    loadTemplatedContent(rq, template, $(window.ctx["contentWrapper"]), transformer, data, preProcessor);
}

function initSidebarSections() {
    var selectedSection = window.ctx["section"];
    var RadioList = Handlebars.templates["radio-list"];
    var opts = {
        list: getSectionList(),
        selectedItem: selectedSection,
        containerTheme: window.ctx['containerTheme'],
        childTheme: window.ctx['childTheme'],
        childSelectedTheme: window.ctx['childSelectedTheme']
    }
    var templated = RadioList(opts);
    $(".sidebar .content", window.ctx["contentWrapper"]).html(templated).trigger("create");
}

function getSectionList(context) {
    // TODO: 
    // context is a person?
    //return [
    //    {item: "Profile", idx: 0},
    //    {item: "Followers", idx: 1},
    //    {item: "Repos", idx: 2},
    //  ...
    //]
    // context is a repo?
    return [
        {item: "Feed", idx: 0},
        {item: "Commits", idx: 1},
        {item: "Code", idx: 2},
        {item: "Issues", idx: 3},
        {item: "Milestones", idx: 4},
        {item: "Watchers", idx: 5}
    ]
}

function loadTemplatedContent(rq, template, $container, transformer, data, preProcessor) {
    $.ajax({
        type: 'GET',
        url: rq,
        data: data,
        dataType: 'jsonp',
        success: function(data) {
            var opts = {
                list: $.map(data.data, transformer),
                containerTheme: window.ctx['containerTheme'],
                childTheme: window.ctx['childTheme']
            }
            if (preProcessor) {
                opts = preProcessor(opts);
            }
            var templated = template(opts);
            $(".view .content", $container).html(templated).trigger("create");
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
        "content": jsonItem
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
        path: jsonItem["path"]
    }
    return dirItem;
}

function showFileContents(filename){
  //TODO: Complete
   alert('todo!');
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

