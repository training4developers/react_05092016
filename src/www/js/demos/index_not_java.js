var person = {

	firstName: 'Bob',
	lastName: 'Smith',

	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}

};

var person2 = {
	firstName: 'Judy',
	lastName: 'Jones',
	getFN: person.getFullName
};

person.getFullName.doit = function() {
	console.log('do it');
};

console.log(person.getFullName());
console.log(person2.getFN());

console.log(person.getFullName === person2.getFN);

console.dir(person.getFullName);
