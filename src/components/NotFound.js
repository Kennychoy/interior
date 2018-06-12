import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CurrentLocation from "./CurrentLocation";

class NotFound extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render(){
		return (
			<div id="not-found">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-xs-12 not-found-img">
							<img src="./images/carousel-4.jpeg" className="img-responsive"/>
						</div>
						<div className="col-md-6 col-xs-12 not-found-content">
							<div className="not-found-text">
								<h3>PAGE NOT FOUND</h3>
								<p>Unfortunately the page you were looking for could not be found.</p>
								<button className="btn btn-lg">
									<Link to="/">GO TO HOME</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	componentDidMount(){
	}
}

export default NotFound;