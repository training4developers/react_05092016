import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

	render() {
		return <h1>Hello World!</h1>;
	}

}

ReactDOM.render(<HelloWorld message='Hi!' />, document.querySelector('main'));
