$(function() {
	function TestViewModel(){
		this.sample = "sample text";
	}
	ko.applyBindings(new TestViewModel());
});