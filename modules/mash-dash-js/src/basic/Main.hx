package basic;

import mithril.M;

class User implements Model
{
	@prop public var name : String;

	public function new(name) {
		// Using M.prop, this.name is now a method similar to
		// jQuery's methods. If called with no parameters the
		// value is returned, otherwise the value is set.
		this.name = M.prop(name);
	}
}

class Main implements Component
{
	var user : User;

	public function new() {}

	public function controller() {
		this.user = new User("Thorin Oakenshield");
	}

	public function view() [
		// Display an input field.
		INPUT({
			// Listens to the "oninput" event of the input field and
			// will set user.name to the field's "value" attribute:
			oninput: M.withAttr("value", user.name),

			// The redraw triggered by the above event will
			// update the value from the model automatically:
			value: user.name()
		}),

		// Display a div with class .user and some style
		DIV.user({style: {margin: "15px"}}, user.name())
	];

	// Program entry point
	static function main() {
		M.mount(js.Browser.document.body, new Main());
	}
}

