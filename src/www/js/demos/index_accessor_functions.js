'use strict';

var p = {
	_firstName: "Bob"
};

Object.defineProperty(p, 'firstName', {
	configurable: true,
	enumerable: true,
	get: function() {
		return this._firstName;
	},
	set: function(value) {
		this._firstName = value;
	}
});


class Person {

	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get firstName() {
		console.log("getting");
		return this._firstName;
	}

	set firstName(value) {
		console.log("setting");
		this._firstName = value;
	}

}

var p = new Person("Bob", "Martin");
p.firstName = "Raju";
console.log(p.firstName);
