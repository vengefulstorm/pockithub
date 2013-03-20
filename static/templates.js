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
  buffer += "\n        <li class='child-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n            ";
  stack1 = helpers['if'].call(depth0, depth0.avatar_url, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class='item-content'>\n                ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.render),stack1 ? stack1.call(depth0, depth0.content, depth0.type, options) : helperMissing.call(depth0, "render", depth0.content, depth0.type, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n        </li>\n    ";
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
  buffer += "\n            <div class='user'>\n                <a href='javascript:void(0)' data-url='";
  if (stack1 = helpers.user_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class=\"user-link\">\n                    <img src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class='avatar'/>\n                    <h1 class='username'>";
  if (stack1 = helpers.user_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n                </a>\n            </div>\n            ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='false' class='child-list'>\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });
templates['code-view'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
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
  buffer += "\n    <li class='directory-list-item' data-name='";
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
    + "'>\n        <a href='javascript:void(0)'>\n            <img src='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getItemIcon),stack1 ? stack1.call(depth0, depth0.type, options) : helperMissing.call(depth0, "getItemIcon", depth0.type, options)))
    + "'/>\n            <h1 class='itemName'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h1>\n        </a>\n        <div id='file-";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>\n        </div>\n    </li>\n    ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='false'>\n    <li class='directory-list-item' data-name='..' data-type='dir' data-link='..' data-path='..' id=\"upDir\">\n        <a href='javascript:void(0)'>\n            <img src='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getItemIcon),stack1 ? stack1.call(depth0, "dir", options) : helperMissing.call(depth0, "getItemIcon", "dir", options)))
    + "'/>\n            <h1 class='itemName'>..</h1>\n        </a>\n    </li>\n    ";
  stack2 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n";
  return buffer;
  });
templates['followers-view'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n    <div class=\"followers-list\">\n        ABC\n    </div>\n";
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['following-view'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n    <div class=\"following-list\">\n        DEF\n    </div>\n";
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
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
  buffer += "\n        <li class='issue-comments-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n            <div class='item-content'>No Comments</div>\n        </li>\n    ";
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
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program7, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <li class='issue-comments-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <img src='"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'/>            \n                <span class='ui-li-aside'>";
  if (stack2 = helpers.created_at) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.created_at; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n                <div class='item-content'>\n                    ";
  if (stack2 = helpers.body) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.body; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n            </li>\n        ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='true' class='issue-comments-list'>\n    ";
  options = {hash:{},inverse:self.program(6, program6, data),fn:self.programWithDepth(program3, data, depth0),data:data};
  stack2 = ((stack1 = helpers.isEmpty),stack1 ? stack1.call(depth0, depth0.list, options) : helperMissing.call(depth0, "isEmpty", depth0.list, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>";
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
  buffer += "\n        <li data-role='collapsible' data-inset='false' class='issues-list-item' data-url='";
  if (stack1 = helpers.children_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.children_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n            <h3 class='collapsible-header' data-inset='false'>\n                ";
  stack1 = helpers['if'].call(depth0, depth0.avatar_url, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                <div class='item-content'>\n                    <span class='ui-li-aside'>#"
    + escapeExpression(((stack1 = ((stack1 = depth0.content),stack1 == null || stack1 === false ? stack1 : stack1.number)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.renderIssue),stack1 ? stack1.call(depth0, depth0.content, options) : helperMissing.call(depth0, "renderIssue", depth0.content, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n            </h3>\n            <div class='collapsible-content'>\n                ";
  stack2 = helpers['with'].call(depth0, depth0.content, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n         </li>\n    ";
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
  buffer += "\n                <div class='user'>\n                    <a href='javascript:void(0)' data-url='";
  if (stack1 = helpers.user_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class=\"user-link\">\n                        <img src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class='avatar'/>\n                        <h1 class='username'>";
  if (stack1 = helpers.user_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n                    </a>\n                </div>\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class='user-list' data-role='listview'>\n                    ";
  stack1 = helpers['if'].call(depth0, depth0.assignee, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <li class='user-list-item'>\n                        <a href='javascript:void(0)'>\n                            <img class='thumbnail-small ui-li-icon' src='"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' />\n                            <h3>Opened by: "
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n                        </a>\n                    </li>\n                </ul>\n                <div id='issues-comments-list-";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.number; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='child-content'>\n                </div>                \n                ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li class='user-list-item'>\n                        <a href='javascript:void(0)'>\n                            <img class='thumbnail-small ui-li-icon' src='"
    + escapeExpression(((stack1 = ((stack1 = depth0.assignee),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' />\n                            <h3>Assigned to: "
    + escapeExpression(((stack1 = ((stack1 = depth0.assignee),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n                        </a>\n                    </li>\n                    ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='false' class='issues-list'>\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });
templates['pull-request-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n    <div class=\"pull-request-list\">\n        ABC\n    </div>\n";
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
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
templates['starred-repos-view'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n    <div class=\"starred-repos-list\">\n        ABC\n    </div>\n";
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
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
    + "' class='avatar'/>\r\n                <h1 class='username'>";
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
  buffer += " data-inset='false' class='user-list'>\r\n    ";
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
  buffer += "\n  <h2>";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n  <img src=\"";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></img>\n  ";
  if (stack1 = helpers.gravatar_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gravatar_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.company) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.company; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.blog) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blog; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.location; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.hireable) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hireable; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.bio) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bio; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.public_repos) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.public_repos; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.public_gists) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.public_gists; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.followers) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.followers; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.following) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.following; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.html_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.html_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.created_at) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.created_at; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['user-repos'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"repo-list-item\" data-name=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-full_name=\"";
  if (stack1 = helpers.full_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.full_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <a href='javascript:void(0)'>\n            <h1 class='repo-list-item-name'>";
  if (stack1 = helpers.full_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.full_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        </a>\n    </li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();