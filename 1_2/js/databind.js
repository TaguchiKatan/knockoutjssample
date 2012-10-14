$(function() {
	function TestViewModel(){
		this.sample = ko.observable("Nakano");
		this.sample_add = ko.computed(function() {
			return "Hello , dear " + this.sample();
		}, this);
	}
	ko.applyBindings(new TestViewModel());
});