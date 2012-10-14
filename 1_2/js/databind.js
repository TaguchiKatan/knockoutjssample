$(function() {
	function TestViewModel(){
		this.sample = ko.observable("中野");
		this.sample_add = ko.computed(function() {
			return "Hello , dear " + this.sample();
		}, this);
	}
	ko.applyBindings(new TestViewModel());
});