import React from 'react';

// ADD DEFAULT :)
export default class WidgetTable extends React.Component {

	render() {

		return <table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Color</th>
					<th>Size</th>
					<th>Qty</th>
				</tr>
			</thead>
			<tbody>
				{this.props.widgets.map(widget =>
					<tr key={widget.id}>
						<td>{widget.name}</td>
						<td>{widget.color}</td>
						<td>{widget.size}</td>
						<td>{widget.quantity}</td>
					</tr>)}
			</tbody>
		</table>;
	}

}
