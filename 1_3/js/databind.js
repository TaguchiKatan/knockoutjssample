$(function() {
	function TestViewModel(){
		this.sample = ko.observable("田中");
		this.sample_add = ko.computed(function() {
			return "Hello , dear " + this.sample();
		}, this);
		this.clearButton = function() {
			this.sample("");
		};
	}
	ko.applyBindings(new TestViewModel());
});