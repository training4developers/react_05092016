'use strict';
//
// function doIt(a, b) {
// 	console.log(this);
// 	console.log(a,b);
// }
//
// doIt();
//
// var o = {
// 	id: 2,
// 	doIt: doIt
// };
//
// o.doIt();
//
// console.log(o.doIt === doIt);
//
// o.doIt.call({ id: 3 }, 1, 2);
// o.doIt.apply({ id: 4 }, [1,2]);
//
// var fn = o.doIt.bind({ id: 5 });
//
// fn.call({id:6});

var t = {
	id: 2,
	doIt: function() {
		console.log(this);
	}
};

t.doIt();

setTimeout(t.doIt, 2000);
