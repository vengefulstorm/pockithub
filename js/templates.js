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
  buffer += "\r\n            <div class='user'>\r\n                <a href='javascript:void(0)' data-url='{user_url}}' class=\"user-link\">\r\n                    <img src='";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class='avatar'/>\r\n                    <h1 class='username'>";
  if (stack1 = helpers.user_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n                </a>\r\n            </div>\r\n            ";
  return buffer;
  }

  buffer += "<ul data-role='listview' ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='false' class='child-list'>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });
templates['directory-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  if (stack1 = helpers.containerTHeme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.containerTHeme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
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
    + "'>\n      <a href='javascript:void(0)'>\n        <img src='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getItemIcon),stack1 ? stack1.call(depth0, depth0.type, options) : helperMissing.call(depth0, "getItemIcon", depth0.type, options)))
    + "'/>\n        <h1 class='itemName'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h1>\n      </a>\n    </li>\n  ";
  return buffer;
  }

  buffer += "<ul data-role='listview' data-scroll=\"true\" ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='false'>\n  ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
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

  buffer += "<fieldset data-role='controlgroup' data-scroll=\"true\" ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class='radio-list'>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</fieldset>\r\n";
  return buffer;
  });
templates['titled-text-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += "\r\n        <li class='titled-text-list-item' ";
  stack1 = helpers['if'].call(depth0, depth1.childTheme, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n            <a href=\"javascript:void(0)\" data-url='";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>\r\n                ";
  stack1 = helpers['if'].call(depth0, depth0.aside, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <h3 href='javascript:void(0)'>";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.number) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.number; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ": ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n                <p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n            </a>\r\n        </li>\r\n    ";
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
  buffer += "\r\n                <span class=\"";
  if (stack1 = helpers.aside_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.aside_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.aside) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.aside; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                ";
  return buffer;
  }

  buffer += "<ul data-role='listview' data-scroll=\"true\" ";
  stack1 = helpers['if'].call(depth0, depth0.containerTheme, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='false' class='titled-text-list'>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
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
  buffer += ">\r\n            <a href='javascript:void(0)' data-url='{user_url}}' class=\"user-link\">\r\n                <img src='";
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
})();