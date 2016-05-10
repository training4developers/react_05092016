let parent = {
	amt: 2000,
	address: {
		city: 'Edison',
		state: 'NJ'
	}
};

var b = {};

b.top = parent.address;
console.log(b.top.state);

b.top.state = "RI";

let child = Object.create(parent);

console.log(child.address.state); // RI

console.log(child.amt);

parent.amt = 4000;

child.amt = 40;

child.address.state = 'NY';

console.log(child.address.state);

console.dir(child);
