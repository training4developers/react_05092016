'use strict';

let colors = ['red','gold','light blue','yellow',
	'white','green','saffron','blue'];

console.log(colors);

let items = ["hi", 2, true, { id:3}, []];

console.log(items);

items[30000] = "last item";

items.someProp = "goodbye!!!!!";

console.dir(items);
