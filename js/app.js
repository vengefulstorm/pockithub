$(function() {
window.ctx = {
    user: "vengefulstorm",
    repo: "rage490",
    section: "Watchers",
    contentWrapper: "#main-wrapper",
    containerTheme: "c",
    childTheme: "c",
    childSelectedTheme: "b"
}

switchToSection(window.ctx.section);
initSidebarSections(window.ctx.section);

// Initialize click handlers
$(".view .header .ui-btn-left", window.ctx["contentWrapper"]).click(function(event) {
    event.stopPropagation();
    toggleSidebar("main-wrapper");
});
$sectionRadioSet = $(".sidebar .content .radio-list .ui-radio label", window.ctx["contentWrapper"]);
$sectionRadioSet.click(function(event) {
    // Remove "unselected" theme from input/label elements of radio buttion set
    // Save initialized JQquery Mobile radio button objects
    // Add "selected" theme to input/label elements of clicked radio button
    // Refresh previously saved set of radio button objects
    $sectionRadioSet.prev().attr("data-theme", window.ctx["childTheme"]);
    $toBeRefreshed = $sectionRadioSet.attr("data-theme", window.ctx["childTheme"])
        .removeClass("ui-btn-up-" + window.ctx["childSelectedTheme"])
        .addClass("ui-btn-up-" + window.ctx["childTheme"]);
    $(this).prev().attr("data-theme", window.ctx["childSelectedTheme"]);
    $(this).attr("data-theme", window.ctx["childSelectedTheme"])
        .removeClass("ui-btn-hover-" + window.ctx["childTheme"])
        .addClass("ui-btn-hover-" + window.ctx["childSelectedTheme"])
        .removeClass("ui-btn-up-" + window.ctx["childTheme"])
        .addClass("ui-btn-up-" + window.ctx["childSelectedTheme"]);
    $toBeRefreshed.checkboxradio("refresh");
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

function switchToSection(section) {
    var UserList = Handlebars.templates["user-list"];
    switch(section) {
        case 'Watchers':
            var rq = getWatchersRequest(window.ctx["user"], window.ctx["repo"]);
            loadTemplatedContent(rq, UserList, $(window.ctx["contentWrapper"]));
            break;
        default:
            break;
    }
}

function initSidebarSections(selectedSection) {
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

function loadTemplatedContent(rq, template, $container) {
    $.ajax({
        type: 'GET',
        url: rq,
        dataType: 'jsonp',
        success: function(data) {
            var opts = {
                list: $.map(data.data, transformToChild),
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
    child = {
        user_name: jsonItem["login"],
        user_url: jsonItem["url"],
        avatar_url: jsonItem["avatar_url"]        
    }
    return child;
}

function getWatchersRequest(user, repo) {
    var rq = "https://api.github.com";
    return rq + "/repos/" + user + "/" + repo + "/watchers";
}
