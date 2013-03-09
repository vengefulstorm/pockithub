Handlebars.registerHelper('render', function(item, type) {
    var elt = '<a href="javascript:void(0)" ';
    switch(type) {
        case "issue":
            elt = elt + 'data-url="' + item['url'] + '">';
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

Handlebars.registerHelper('ifEquals', function(elt1, elt2, options) {
    if(elt1 == elt2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('getItemIcon', function(type) {
    if (type == 'dir') {
        return 'css/images/Actions-document-open-folder-icon.png';
    } else {
        return 'css/images/Mimetypes-x-office-document-icon.png';
    }
});

