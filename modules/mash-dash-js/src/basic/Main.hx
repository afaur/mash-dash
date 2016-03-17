package basic;

import mithril.M;

class ReferenceDocument implements Model
{

	@prop public var plan_id : Int;
	@prop public var network_id : Int;
	@prop public var network_name : String;
	@prop public var partner_network_code : String;

	public function new(values) {
		this.plan_id = M.prop(values.plan_id);
		this.network_id = M.prop(values.network_id);
		this.network_name = M.prop(values.network_name);
		this.partner_network_code = M.prop(values.partner_network_code);
	}
}

class Main implements Component
{
	var rdoc : ReferenceDocument;

	public function new() {}

	public function controller() {
		this.rdoc = new ReferenceDocument({
			"plan_id": null,
			"network_id": null,
			"network_name": "",
			"partner_network_code": ""
		});
	}

	public function formField(field: Dynamic) {
		return [
		];
	}

	public function view() [
		DIV.user({style: {margin: "15px"}}, [
			LABEL({
				"for": "plan_id"
			}, "Plan ID: "),
			INPUT({
				oninput: M.withAttr("value", Reflect.field(rdoc, "plan_id")),
				id: "plan_id",
				value: Reflect.callMethod(rdoc, Reflect.field(rdoc,"plan_id"), [])
			}),
			LABEL({
				"for": "network_id"
			}, "Network ID: "),
			INPUT({
				oninput: M.withAttr("value", Reflect.field(rdoc, "network_id")),
				id: "network_id",
				value: Reflect.callMethod(rdoc, Reflect.field(rdoc,"network_id"), [])
			})
		]),
		DIV.user({style: {margin: "15px"}}, rdoc.plan_id())
	];

	static function main() {
		M.mount(js.Browser.document.body, new Main());
	}
}

