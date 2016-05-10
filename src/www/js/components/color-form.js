import React from 'react';

export default class ColorForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newColor: ''
		};

		this.onChange = this.onChange.bind(this);
		this.addColor = this.addColor.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	addColor() {
		this.props.addColor(this.state.newColorName);
	}

	render() {

		return <form>
			<div>
				<label>New Color Code: <input type='text' name='newColorCode' value={this.state.newColorCode} onChange={this.onChange} /></label>
			</div>
			<div>
				<label>New Color Name: <input type='text' name='newColorName' value={this.state.newColorName} onChange={this.onChange} /></label>
			</div>
			<button type='button' onClick={this.addColor}>Add Color</button>
		</form>;

	}


}
