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
            elt = elt + ">";
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

