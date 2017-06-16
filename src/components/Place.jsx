import React from 'react';

class Place extends React.Component {
	render() {
		const divStyle = {backgroundImage: 'url(' + this.props.image + ')'};
		return (
			<a href="#" className="place" style={divStyle}>
				<div className="place__address">	
					<div className="place__city">{this.props.city}</div>
					<div className="place__name">{this.props.name}</div>
				</div>	
			</a>
		)
	}
};

export default Place;