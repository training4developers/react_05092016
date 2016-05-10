var x = 0,y = 0,funcs = [];

for(; x<5; x++) {
	
	// modify between here
	// you cannot use y
	// you cannot invoke console.log in the first loop

	function doIt(t) {
		funcs.push(function() {
			console.log(t);
		});
	}

	doIt(x);

	// and here
}

for(;y<5;y++) {
	funcs[y]();
}
