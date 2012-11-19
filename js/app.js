$(function() {
window.ctx = {
    user: "vengefulstorm",
    repo: "rage490",
    section: "Watchers",
    subSection: "",
    contentWrapper: "#main-wrapper",
    containerTheme: "c",
    childTheme: "c",
    childSelectedTheme: "c"
}

$.getScript("request_helpers.js");

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
    switch(section) {
        case 'Watchers':
            template = Handlebars.templates["user-list"];
            if (!nextRQ) {
                rq = getWatchersRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToChild;
            break;
        case 'Code':        
            template = directory_list; // TODO: Create template and helper functions to generate markup
                
            if (!nextRQ) {
                rq = getCodeRequest(window.ctx["user"], window.ctx["repo"]);
            }
            transformer = transformToDirectoryItem;
            break;            
        default:
            return;
    }
    $(".view .subheader", window.ctx["contentWrapper"]).html(section);
    loadTemplatedContent(rq, template, $(window.ctx["contentWrapper"]), transformer, data);
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

function loadTemplatedContent(rq, template, $container, transformer, data) {
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
            var templated = template(opts);
            $(".view .content", $container).html(templated).trigger("create");
        },
        error: function() { 
            alert("Error on retrieving: " + rq);
        }
    });
}

function transformToChild(jsonItem) {
    var child = {
        user_name: jsonItem["login"],
        user_url: jsonItem["url"],
        avatar_url: jsonItem["avatar_url"]        
    }
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
