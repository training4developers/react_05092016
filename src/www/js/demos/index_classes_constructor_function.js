import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(message) {
	this.message = message;
}

HelloWorld.prototype.showMessage = function() {
	console.log(this.message);
};

var hw = new HelloWorld('hi world!');

class HelloWorld2 {

	constructor(message) {
		this.message = message;
	}

	showMessage() {
		console.log(this.message);
	}

}

var hw2 = new HelloWorld2('hi world!');

console.log(typeof HelloWorld);
console.log(typeof HelloWorld2);

console.dir(hw);
console.dir(hw2);




// class HelloWorld extends React.Component {
//
// }
