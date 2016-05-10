'use strict';

function doIt() {
	console.log(this);
}


setTimeout(doIt, 1000);
