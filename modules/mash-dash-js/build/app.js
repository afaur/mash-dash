(function (console) { "use strict";
var mithril_Model = function() { };
var basic_User = function(name) {
	this.name = m.prop(null);
	this.name = m.prop(name);
};
basic_User.__interfaces__ = [mithril_Model];
var mithril_Component = function() { };
var basic_Main = function() {
};
basic_Main.__interfaces__ = [mithril_Component];
basic_Main.main = function() {
	m.mount(window.document.body,new basic_Main());
};
basic_Main.prototype = {
	controller: function() {
		if(m.__haxecomponents.length && !$bind(this,this.controller)) {
			return m.__haxecomponents.pop().controller();
		}
		this.user = new basic_User("Thorin Oakenshield");
		return this;
	}
	,view: function() {
		return [m.m("INPUT",{ oninput : m.withAttr("value",this.user.name), value : this.user.name()}),m.m("DIV.user",{ style : { margin : "15px"}},this.user.name())];
	}
};
var mithril_View = function() { };
var mithril_Controller = function() { };
var mithril_Mithril = function() { };
var mithril_ControllerView = function() { };
var mithril_Module = function() { };
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
try {
var __varName = window.m;
(function(m) {
			if (m.__haxecomponents) return;
			m.m = function() {
				try { 
					if($hxClasses['List']) for(var i=0; i < arguments.length; ++i) if(arguments[i] instanceof List) {
						var it = $iterator(arguments[i])();	arguments[i] = [];
						while(it.hasNext())	arguments[i].push(it.next());
					}
				} catch(e) {}
				return m.apply(this, arguments);
			}
			m.__mount   = m.mount;
			m.__component = m.component;
			m.__haxecomponents = [];
			m.mount = function(root, component) { if(component.controller) m.__haxecomponents.push(component); return m.__mount(root, component); }
			m.component = function(component) { if(component.controller) m.__haxecomponents.push(component); return m.__component(component); }
			if (typeof module !== 'undefined' && module.exports) m.request = function(xhrOptions) { return m.deferred().promise; };
		})(__varName);
} catch(_) {}
try {
GLOBAL.m = require("mithril");
var __varName1 = GLOBAL.m;
(function(m) {
			if (m.__haxecomponents) return;
			m.m = function() {
				try { 
					if($hxClasses['List']) for(var i=0; i < arguments.length; ++i) if(arguments[i] instanceof List) {
						var it = $iterator(arguments[i])();	arguments[i] = [];
						while(it.hasNext())	arguments[i].push(it.next());
					}
				} catch(e) {}
				return m.apply(this, arguments);
			}
			m.__mount   = m.mount;
			m.__component = m.component;
			m.__haxecomponents = [];
			m.mount = function(root, component) { if(component.controller) m.__haxecomponents.push(component); return m.__mount(root, component); }
			m.component = function(component) { if(component.controller) m.__haxecomponents.push(component); return m.__component(component); }
			if (typeof module !== 'undefined' && module.exports) m.request = function(xhrOptions) { return m.deferred().promise; };
		})(__varName1);
} catch(_) {}
basic_User.__meta__ = { fields : { name : { prop : null}}};
basic_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=app.js.map