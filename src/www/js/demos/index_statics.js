'use strict';

function Person(firstName, lastName) {
	this._firstName = firstName;
	this._lastName = lastName;
}

Person.create = function() {

}

class Person {

	static create(firstName, lastName) {

		return new Person(firstName, lastName);
	}

	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	getFullName() {

		Person.create
		return; //...
	}
}

var p = Person.create("Bob", "Martin");
