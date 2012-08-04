(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['radio-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " data-theme='";
  foundHelper = helpers.containerTheme;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\r\n        <input type='radio' \r\n            ";
  stack1 = depth1.selectedItem;
  stack2 = depth0.item;
  foundHelper = helpers.ifEquals;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:{},inverse:self.programWithDepth(program7, data, depth1),fn:self.programWithDepth(program4, data, depth1)}) : helperMissing.call(depth0, "ifEquals", stack2, stack1, {hash:{},inverse:self.programWithDepth(program7, data, depth1),fn:self.programWithDepth(program4, data, depth1)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            name='section-choice' id='section-choice-";
  foundHelper = helpers.idx;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.idx; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' value='";
  foundHelper = helpers.item;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.item; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "'  />\r\n        <label for='section-choice-";
  foundHelper = helpers.idx;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.idx; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "'>";
  foundHelper = helpers.item;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.item; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</label>\r\n	";
  return buffer;}
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " \r\n                checked='checked' ";
  stack1 = depth2.childSelectedTheme;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program5, data, depth2)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n            ";
  return buffer;}
function program5(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  stack1 = depth3.childSelectedTheme;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program7(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " \r\n                ";
  stack1 = depth2.childTheme;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program8, data, depth2)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n            ";
  return buffer;}
function program8(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  stack1 = depth3.childTheme;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

  buffer += "<fieldset data-role='controlgroup' ";
  stack1 = depth0.containerTheme;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class='radio-list'>\r\n	";
  stack1 = depth0.list;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</fieldset>";
  return buffer;});
templates['user-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " data-theme='";
  foundHelper = helpers.containerTheme;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n		<li class='user-list-item' ";
  stack1 = depth1.childTheme;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n			<a href='javascript:void(0)'>\r\n                <img src='";
  foundHelper = helpers.avatar_url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' class='avatar'/>\r\n                <h1 class='username'>";
  foundHelper = helpers.user_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\r\n            </a>\r\n            \r\n		</li>\r\n	";
  return buffer;}
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  stack1 = depth2.childTheme;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

  buffer += "<ul data-role='listview' ";
  stack1 = depth0.containerTheme;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='false' class='user-list'>\r\n	";
  stack1 = depth0.list;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;});
templates['child-list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " data-theme='";
  foundHelper = helpers.containerTheme;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.containerTheme; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n		<li class='child-list-item' ";
  stack1 = depth1.childTheme;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program4, data, depth1)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n			<div class='user'>\n				<a href='javascript:void(0)'>\n                    <img src='";
  foundHelper = helpers.avatar_url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "' class='avatar'/>\n                    <h1 class='username'>";
  foundHelper = helpers.user_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.user_name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\n                </a>\n\n			</div>\n            <div class='content'>\n    			";
  stack1 = depth0.content;
  foundHelper = helpers.render;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "render", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "\n            </div>\n		</li>\n	";
  return buffer;}
function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " data-theme='";
  stack1 = depth2.childTheme;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "' ";
  return buffer;}

  buffer += "<ul data-role='listview' ";
  stack1 = depth0.containerTheme;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-inset='false' class='child-list'>\n	";
  stack1 = depth0.list;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
})();
