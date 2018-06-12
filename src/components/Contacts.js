import React, { Component } from 'react';
import GoogleMap from "./Map";
import AboutContacts from "./AboutContacts";
import CurrentLocation from "./CurrentLocation";

class Contacts extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render(){
		return (
			<div id="contacts">
				<CurrentLocation place={this.props.match.url}/>
				<GoogleMap />
				<AboutContacts />
				
				<div className="contacts-form">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-xs-12">
								<div className="form-group">
									<input className="form-control input-lg" type="text" placeholder="Your Name"/>
								</div>
								<div className="form-group">
									<input className="form-control input-lg" type="email" placeholder="Your Email"/>
								</div>
								<div className="form-group">
									<input className="form-control input-lg" type="text" placeholder="Your Website"/>
								</div>
								<div className="form-group">
									<input className="form-control input-lg" type="text" placeholder="Your Company"/>
								</div>
							</div>
							<div className="col-md-6 col-xs-12">
								<div className="form-group">
									<textarea rows='5' className="form-control input-lg" type="text" placeholder="Your Comment"/>
								</div>
							</div>
							<div className="col-xs-12">
								<p>We will contact you within one business day</p>
								<button className="btn btn-lg" type="submit">SEND MESSAGE</button>
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

export default Contacts;