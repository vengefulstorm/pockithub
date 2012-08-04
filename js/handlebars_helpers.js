Handlebars.registerHelper('render', function(item) {
    // process item
});

Handlebars.registerHelper('ifEquals', function(elt1, elt2, options) {
    if(elt1 == elt2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

