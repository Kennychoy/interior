import React, { Component } from 'react';
import {Link} from "react-router-dom";

class CurrentLocation extends Component {
	constructor(props){
		super(props);
	}
	getCurrentLocation = (loc) => {
		loc = loc.replace("/", "");
		return loc.toUpperCase();
	}
	render(){		
		return (
			<div className="location-div">
				<div className="container">
					<div className="row">
						<div className="col-xs-2">
							<div className="page-name">{this.getCurrentLocation(this.props.place)}</div>								
						</div>
						<div className="col-xs-4">
							<div className="current-location">You are here: <Link to="/">Home</Link> / {this.getCurrentLocation(this.props.place)}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CurrentLocation;