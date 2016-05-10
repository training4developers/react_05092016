import React from 'react';
import ReactDOM from 'react-dom';

import ColorForm from './components/color-form';

let colors = ['hot pink','red','baby blue'];

class HelloWorld extends React.Component {

	static get propTypes() {
		return {
			subTitle: React.PropTypes.string.isRequired,
			colors: React.PropTypes.array
		};
	}

	constructor(props) {
		super(props);
		this.state = {
			colors: props.colors.concat()
		};

		this.addColor = this.addColor.bind(this);
	}

	addColor(newColorName) {
		let colors = this.state.colors.concat(newColorName);
		this.setState({
			colors: colors
		});
	}

	render() {

		var showTable = false;

		return <div>
			<header>
				<h1>ADP Corporate Colors</h1>
				<h2>{this.props.subTitle}</h2>
			</header>
			{showTable ?
			<ul>
				{this.state.colors.map(function(color) {
					return <li key={color}>{color}</li>;
				})}
			</ul>
			: <ColorForm addColor={this.addColor} />}
		</div>;
	}

}

ReactDOM.render(<HelloWorld subTitle='Favorite Colors' colors={colors} />, document.querySelector('main'));


// document.querySelector('#click-me')
// 	.addEventListener('click', function() {
// 		console.log('value prop: ', document.querySelector('#message').value);
// 		console.log('value attr: ', document.querySelector('#message').getAttribute('value'));
// 	});
