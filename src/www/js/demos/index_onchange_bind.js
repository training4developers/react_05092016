'use strict';

function doIt() {
	console.log(this);
}

var o = {
	doIt: doIt
};

o.doIt = o.doIt.bind(o);

setTimeout(o.doIt, 1000);


document.querySelector("button").addEventListener("click", o.doIt);
