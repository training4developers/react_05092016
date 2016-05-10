
function outer() {

	var t = 10;

	setTimeout(function doIt() {
		t = 23;
	}, 2000);

	return function inner() {
		console.log(t);
	};
}

var fn = outer();
fn();

setTimeout(function() {
	fn();
}, 4000);
