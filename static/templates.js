(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['child-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n        <li class='child-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n            ";
  stack1 = helpers['if'].call(depth0, depth0.avatar_url, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            <div class='item-content'>\r\n                ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.render),stack1 ? stack1.call(depth0, depth0.content, depth0.type, options) : helperMissing.call(depth0, "render", depth0.content, depth0.type, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            </div>\r\n        </li>\r\n    ";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " data-theme='"
    + escapeExpression(((stack1 = depth2.childTheme),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <div class='user'>\r\n                <a href='javascript:void(0)' data-url='";
  if (stack1 = helpers.user_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class=\"user-link\">\r\n                    <img src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'/>\r\n                    <h1 class='username' data-username=\"";
  if (stack1 = helpers.user_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.user_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n                </a>\r\n            </div>\r\n            ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='true' class='child-list'>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });
templates['code-view'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n    ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.renderMarkup),stack1 ? stack1.call(depth0, depth0.content, depth0.render_type, depth0.raw_url, options) : helperMissing.call(depth0, "renderMarkup", depth0.content, depth0.render_type, depth0.raw_url, options)))
    + "\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });
templates['commit-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n        <li data-role='collapsible' class='commit-list-item' data-url='"
    + escapeExpression(((stack1 = ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  stack2 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\r\n            <h3 class='collapsible-header'>\r\n                ";
  stack2 = helpers['if'].call(depth0, depth0.avatar_url, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                <div class='item-content'>\r\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.renderCommit),stack1 ? stack1.call(depth0, depth0.content, options) : helperMissing.call(depth0, "renderCommit", depth0.content, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </div>\r\n            </h3>\r\n        </li>\r\n    ";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " data-theme='"
    + escapeExpression(((stack1 = depth2.childTheme),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div class='user'>\r\n                    <a href='javascript:void(0)' data-url='";
  if (stack1 = helpers.user_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class=\"user-link\">\r\n                        <img src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'/>\r\n                        <h1 class='username' data-username=\"";
  if (stack1 = helpers.user_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.user_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n                    </a>\r\n                </div>\r\n                ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='true' class='commit-list'>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });
templates['directory-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n    <li class='directory-list-item' data-name='";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' data-type='";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' data-link='";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' data-path='";
  if (stack1 = helpers.path) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  options = {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.notFolder),stack1 ? stack1.call(depth0, depth0.type, options) : helperMissing.call(depth0, "notFolder", depth0.type, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\r\n        ";
  options = {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.notFolder),stack1 ? stack1.call(depth0, depth0.type, options) : helperMissing.call(depth0, "notFolder", depth0.type, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    </li>\r\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "data-role=\"collapsible\"";
  }

function program6(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " \r\n            <h3 class=\"collapsible-header\">\r\n                <img src='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getItemIcon),stack1 ? stack1.call(depth0, depth0.type, options) : helperMissing.call(depth0, "getItemIcon", depth0.type, options)))
    + "'/>\r\n                ";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\r\n            </h3>\r\n            <div id='file-";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class=\"collapsible-content file-content\">\r\n            </div>\r\n        ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n            <a href='javascript:void(0)'>\r\n                <img src='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getItemIcon),stack1 ? stack1.call(depth0, depth0.type, options) : helperMissing.call(depth0, "getItemIcon", depth0.type, options)))
    + "'/>\r\n                ";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\r\n            </a>\r\n            <div id='file-";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class=\"file-content\">\r\n            </div>\r\n        ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='false'>\r\n    <li class='directory-list-item' data-name='..' data-type='dir' data-link='..' data-path='..' id=\"upDir\">\r\n        <a href='javascript:void(0)'>\r\n            <img src='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getItemIcon),stack1 ? stack1.call(depth0, "dir", options) : helperMissing.call(depth0, "getItemIcon", "dir", options)))
    + "'/>\r\n            <h1 class='itemName'>..</h1>\r\n        </a>\r\n    </li>\r\n    ";
  stack2 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });
templates['followers-view'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li class='followers-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n        <a href='javascript:void(0)' data-url='";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class=\"user-link\">\r\n            <img src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'/>\r\n            <h1 class='username' data-username='";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n        </a>\r\n    </li>\r\n";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " data-theme='"
    + escapeExpression(((stack1 = depth2.childTheme),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='true' class='followers-list'>\r\n";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });
templates['following-view'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li class='following-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n        <a href='javascript:void(0)' data-url='";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class=\"user-link\">\r\n            <img src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'/>\r\n            <h1 class='username' data-username='";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n        </a>\r\n    </li>\r\n";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " data-theme='"
    + escapeExpression(((stack1 = depth2.childTheme),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='true' class='following-list'>\r\n";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });
templates['issue-comments-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <li class='issue-comments-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n            <div class='item-content'>No Comments</div>\r\n        </li>\r\n    ";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " data-theme='"
    + escapeExpression(((stack1 = depth2.childTheme),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program7, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n            <li class='issue-comments-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                <img class=\"thumbnail-med\" src='"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'/>            \r\n                <span class='ui-li-aside'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formatRelativeDate),stack1 ? stack1.call(depth0, depth0.created_at, options) : helperMissing.call(depth0, "formatRelativeDate", depth0.created_at, options)))
    + "</span>\r\n                <div class='item-content'>\r\n                    ";
  if (stack2 = helpers.body) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.body; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\r\n                </div>\r\n            </li>\r\n        ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='true' class='issue-comments-list'>\r\n    ";
  options = {hash:{},inverse:self.program(6, program6, data),fn:self.programWithDepth(program3, data, depth0),data:data};
  stack2 = ((stack1 = helpers.isEmpty),stack1 ? stack1.call(depth0, depth0.list, options) : helperMissing.call(depth0, "isEmpty", depth0.list, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n</ul>";
  return buffer;
  });
templates['issue-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n        <li data-role='collapsible' data-inset='true' class='issue-list-item' data-url='";
  if (stack1 = helpers.children_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.children_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n            <h3 class='collapsible-header' data-inset='true'>\r\n                ";
  stack1 = helpers['if'].call(depth0, depth0.avatar_url, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                <div class='item-content'>\r\n                    <span class='ui-li-aside'>#"
    + escapeExpression(((stack1 = ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.number)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.renderIssue),stack1 ? stack1.call(depth0, depth0.content, options) : helperMissing.call(depth0, "renderIssue", depth0.content, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </div>\r\n            </h3>\r\n            <div class='collapsible-content'>\r\n                ";
  stack2 = helpers['with'].call(depth0, depth0.content, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            </div>\r\n         </li>\r\n    ";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " data-theme='"
    + escapeExpression(((stack1 = depth2.childTheme),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div class='user'>\r\n                    <a href='javascript:void(0)' data-url='";
  if (stack1 = helpers.user_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class=\"user-link\">\r\n                        <img src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'/>\r\n                        <h1 class='username'>";
  if (stack1 = helpers.user_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n                    </a>\r\n                </div>\r\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <ul class='user-list' data-role='listview' data-inset='true' >\r\n                    ";
  stack1 = helpers['if'].call(depth0, depth0.assignee, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  stack1 = helpers['with'].call(depth0, depth0.user, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </ul>\r\n                <div id='issues-comments-list-";
  if (stack1 = helpers.number) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.number; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class='child-content'>\r\n                </div>                \r\n                ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    ";
  stack1 = helpers['with'].call(depth0, depth0.assignee, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <li class='user-list-item'>\r\n                        <a href='javascript:void(0)' data-url='";
  if (stack1 = helpers.user_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class='user-link'>\r\n                            <img class='thumbnail-small ui-li-icon' src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' />\r\n                            <h3 class=\"username\" data-username=\"";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Assigned to: ";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n                        </a>\r\n                    </li>\r\n                    ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <li class='user-list-item'>\r\n                        <a href='javascript:void(0)' data-url='";
  if (stack1 = helpers.user_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class='user-link'>\r\n                            <img class='thumbnail-small ui-li-icon' src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' />\r\n                            <h3 class=\"username\" data-username=\"";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Opened by: ";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n                        </a>\r\n                    </li>\r\n                    ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='true' class='issue-list'>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });
templates['pull-request-comments-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n    "
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " commented: <br/>\r\n    ";
  if (stack2 = helpers.body) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.body; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\r\n    <br/><br/>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });
templates['pull-request-commits-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n    Commited by: "
    + escapeExpression(((stack1 = ((stack1 = depth0.committer),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\r\n    Body: "
    + escapeExpression(((stack1 = ((stack1 = depth0.commit),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\r\n    <a href=\"javascript:void(0)\" class=\"pull-request-commit-view\" data-user='"
    + escapeExpression(((stack1 = ((stack1 = depth0.committer),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-url='";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "' data-role=\"button\" data-mini=\"true\">View Commit</a>\r\n    <br/><br>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });
templates['pull-request-files-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "GHI\r\n";
  });
templates['pull-request-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n        <div class=\"pull-request-list-item\">\r\n            Pull Request Initiator:<br/>\r\n            Login: "
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <br/>\r\n            Avatar: "
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <br/>\r\n                                <br/>\r\n            State: ";
  if (stack2 = helpers.state) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.state; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\r\n            Title: ";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/> \r\n            Body: ";
  if (stack2 = helpers.body) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.body; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\r\n            <a href=\"javascript:void(0)\" class=\"pull-request-commits-button\" data-url='";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/commits' data-number=\"";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.number; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-role=\"button\" data-mini=\"true\">Show Commits</a>\r\n            <a href=\"javascript:void(0)\" class=\"pull-request-comments-button\" data-url='";
  if (stack2 = helpers.comments_url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.comments_url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "' data-number=\"";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.number; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-role=\"button\" data-mini=\"true\">Show Comments</a>\r\n        </div>\r\n        <div id=\"pull-request-commits-list-";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.number; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\r\n        </div>\r\n        <div id=\"pull-request-comments-list-";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.number; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\r\n        </div>\r\n        <hr/>\r\n    ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='true' class='pull-request-list'>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });
templates['radio-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n        <input type='radio' \r\n            ";
  options = {hash:{},inverse:self.programWithDepth(program7, data, depth1),fn:self.programWithDepth(program4, data, depth1),data:data};
  stack2 = ((stack1 = helpers.ifEquals),stack1 ? stack1.call(depth0, depth0.item, depth1.selectedItem, options) : helperMissing.call(depth0, "ifEquals", depth0.item, depth1.selectedItem, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            name='section-choice' id='section-choice-";
  if (stack2 = helpers.idx) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.idx; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "' value='";
  if (stack2 = helpers.item) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.item; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'  />\r\n        <label for='section-choice-";
  if (stack2 = helpers.idx) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.idx; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>";
  if (stack2 = helpers.item) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.item; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</label>\r\n    ";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " \r\n                checked='checked' ";
  stack1 = helpers['if'].call(depth0, depth2.childSelectedTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program5, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n            ";
  return buffer;
  }
function program5(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += " data-theme='"
    + escapeExpression(((stack1 = depth3.childSelectedTheme),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  return buffer;
  }

function program7(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " \r\n                ";
  stack1 = helpers['if'].call(depth0, depth2.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program8, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n            ";
  return buffer;
  }
function program8(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += " data-theme='"
    + escapeExpression(((stack1 = depth3.childTheme),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  return buffer;
  }

  buffer += "<fieldset data-role='controlgroup' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class='radio-list'>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</fieldset>\r\n";
  return buffer;
  });
templates['search-results-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n        <li class='search-results-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n            <a href='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.generateResultLink),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "generateResultLink", depth0, options)))
    + "' data-ajax=\"false\" class=\"search-result-link\">\r\n                ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.renderSearchResult),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "renderSearchResult", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            </a>\r\n        </li>\r\n    ";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " data-theme='"
    + escapeExpression(((stack1 = depth2.childTheme),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  return buffer;
  }

  buffer += "<h3 class=\"collapsible-header\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='false' class='search-results-list'>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });
templates['starred-repos-view'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n        <li class=\"starred-repo-list-item\" data-name='";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' data-description='";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' data-owner='"
    + escapeExpression(((stack1 = ((stack1 = depth0.owner),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-url='";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>\r\n            <a href='javascript:void(0)'>\r\n                <h1 class='repo-list-item-name'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h1> \r\n                <h2>by "
    + escapeExpression(((stack1 = ((stack1 = depth0.owner),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\r\n                <h2>";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h2>\r\n            </a> \r\n        </li>\r\n    ";
  return buffer;
  }

  buffer += "<div class=\"starred-repo-list\">\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  });
templates['user-feed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "USER-FEED\r\n";
  });
templates['user-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTheme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <li class='user-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n            <a href='javascript:void(0)' data-url='";
  if (stack1 = helpers.user_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class=\"user-link\">\r\n                <img src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'/>\r\n                <h1 class='username' data-username='";
  if (stack1 = helpers.user_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.user_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n            </a>\r\n        </li>\r\n    ";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " data-theme='"
    + escapeExpression(((stack1 = depth2.childTheme),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='true' class='user-list'>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });
templates['user-profile'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <h2>";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n  <img src=\"";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></img>\r\n  ";
  if (stack1 = helpers.gravatar_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gravatar_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.company) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.company; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.blog) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blog; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.location; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.hireable) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hireable; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.bio) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bio; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.public_repos) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.public_repos; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.public_gists) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.public_gists; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.followers) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.followers; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.following) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.following; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.html_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.html_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.created_at) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.created_at; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n  ";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });
templates['user-repos'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li class=\"repo-list-item\" data-name=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-full_name=\"";
  if (stack1 = helpers.full_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.full_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        <a href='javascript:void(0)'>\r\n            <h1 class='repo-list-item-name'>";
  if (stack1 = helpers.full_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.full_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n        </a>\r\n    </li>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });
})();