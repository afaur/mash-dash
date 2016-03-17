(function (console) { "use strict";
var Reflect = function() { };
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
var mithril_Model = function() { };
var basic_ReferenceDocument = function(values) {
	this.partner_network_code = m.prop(null);
	this.network_name = m.prop(null);
	this.network_id = m.prop(null);
	this.plan_id = m.prop(null);
	this.plan_id = m.prop(values.plan_id);
	this.network_id = m.prop(values.network_id);
	this.network_name = m.prop(values.network_name);
	this.partner_network_code = m.prop(values.partner_network_code);
};
basic_ReferenceDocument.__interfaces__ = [mithril_Model];
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
		this.rdoc = new basic_ReferenceDocument({ 'plan_id' : null, 'network_id' : null, 'network_name' : "", 'partner_network_code' : ""});
		return this;
	}
	,formField: function(field) {
		return [];
	}
	,view: function() {
		return [m.m("DIV.user",{ style : { margin : "15px"}},[m.m("LABEL",{ 'for' : "plan_id"},"Plan ID: "),m.m("INPUT",{ oninput : m.withAttr("value",Reflect.field(this.rdoc,"plan_id")), id : "plan_id", value : Reflect.callMethod(this.rdoc,Reflect.field(this.rdoc,"plan_id"),[])}),m.m("LABEL",{ 'for' : "network_id"},"Network ID: "),m.m("INPUT",{ oninput : m.withAttr("value",Reflect.field(this.rdoc,"network_id")), id : "network_id", value : Reflect.callMethod(this.rdoc,Reflect.field(this.rdoc,"network_id"),[])})]),m.m("DIV.user",{ style : { margin : "15px"}},this.rdoc.plan_id())];
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
basic_ReferenceDocument.__meta__ = { fields : { plan_id : { prop : null}, network_id : { prop : null}, network_name : { prop : null}, partner_network_code : { prop : null}}};
basic_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=app.js.map