Handlebars.registerHelper('isEmpty', function(item, block) {
    var size = 0;
    if (item.length) {
        if (item.length == 1) {
            if (item[0].length && item[0].length > 0) {
                size = 1;
            } else {
                size = 0;
            }
        } else {
            size = item.length;
        }
    } else if (typeof item === 'object') {
        $.each(item, function(idx, val) {
            if (val.length) size++;
        });
    }
    if (size == 0) {
        return block.fn(this);
    } else {
        return block.inverse(this);
    }
});

Handlebars.registerHelper('render', function(item, type) {
    var elt = '<a href="javascript:void(0)" ';
    switch(type) {
        case "issue":
            elt = elt + 'data-url="' + item['url'] + '" class="issue-link">';
            elt = elt + '<h1>' + item['title'] + '</h1><p>' + item['body'] + '</p>';
            break;
        case "milestone":
            elt = elt + 'data-url="' + item['url'] + '">';
            elt = elt + '<h1>' + item['title'] + '</h1><p>' + item['description'] + '</p>';
            break;
        case "commit":
            elt = elt + 'data-url="' + item['url'] + '">';
            elt = elt + '<h1>' + item['message'] + '</h1>';
            break;
        default:
            if (/^.*Event$/.test(type)) {
                var action = "", url = "", title = "", body = "", eventType = "";
                switch (type) {
                    // TODO: enumerate the rest of the event types
                    case "PushEvent":
                        action = "pushed";
                        eventType = item["size"] + " commits";
                        body = [];
                        $.each(item["commits"], function(idx, val) {
                            body.push(val["message"]);
                        });
                        body = body.join(", ");
                        break;
                    case "IssuesEvent":
                        var issue = item["issue"];
                        url = issue["url"];
                        title = issue["title"];
                        body = issue["body"];
                        action = item["action"];
                        eventType = "issue";
                        break;
                    case "IssueCommentEvent":
                        var issue = item["issue"];
                        var comment = item["comment"];
                        url = issue["url"];
                        title = issue["title"];
                        body = comment["body"];
                        action = item["action"];
                        eventType = "comment on issue";
                        break;
                    default:
                        break;
                }
                elt = elt + 'data-url="' + url + '">';
                elt = elt + '<h1>' + action + ' ' + eventType + ': ' + title + '</h1><p>' + body + '</p>';
            } else {
                elt = elt + ">";
            }
            break;
    }
    elt = elt + '</a>';
    return elt;
});

Handlebars.registerHelper('renderIssue', function(item) {
    var elt = '<a href="javascript:void(0)" ';    
    elt = elt + 'data-url="' + item['url'] + '" class="issue-link">';
    elt = elt + '<h1 style="display:inline;">' + item['title'] + '</h1>';
    var labels = item['labels'];
    if (typeof labels !== 'undefined') {
        var labelsList = '<ul class="horizontal-list" style="display:inline; padding:0;">';
        $.each(labels, function(idx, val) {
            labelsList = labelsList + '<li class="label-element" style="background-color:#' + val['color'] + ';">' + val['name'] + '</li>';
        });
        elt = elt + labelsList + '</ul>';
    }
    elt = elt + '<br/><br/><p>' + item['body'] + '</p>';
    elt = elt + '</a>';
    return elt;
});

Handlebars.registerHelper('renderIssueComment', function(commentBody) {
    var elt = '<br/>' + commentBody;
    return elt;
});

Handlebars.registerHelper('ifEquals', function(elt1, elt2, options) {
    if(elt1 == elt2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('getItemIcon', function(type) {
    if (type == 'dir') {
        return '/static/Actions-document-open-folder-icon.png';
    } else {
        return '/static/Mimetypes-x-office-document-icon.png';
    }
});

