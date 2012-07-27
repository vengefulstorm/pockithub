$(function() {
var template = $("#test-template").html();
var compiled = Handlebars.compile(template);

var opts = {
	user: "vengefulstorm",
	user_url: "https://www.github.com/vengefulstorm",
	repo: "rage490"
}

$("body").append(compiled(opts));

});
