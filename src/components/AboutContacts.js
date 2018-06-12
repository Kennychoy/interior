import React, { Component } from 'react';

class AboutContacts extends Component {
	constructor(props){
		super(props);
		this.state = {
			aboutIcon: [
				{
					icon: <i className="fas fa-phone"></i>,
					title: "Phone:",
					text: "(012) 345 678 999"
				},
				{
					icon: <i className="fas fa-map-marker-alt"></i>,
					title: "Location:",
					text: "No. 12, Somewhere, NearBy"
				},
				{
					icon: <i className="far fa-envelope"></i>,
					title: "Email:",
					text: "dont@email.me"
				},
			]
		}
	}
	render(){
		return (
			<div className="about-contacts">
				<div className="container">
					<div className="row">
						
						{this.state.aboutIcon.map( (item, i) => {
							return (
								<div className="about-contacts-details col-sm-4 col-xs-12" key={i}>
									<div className="about-contacts-icon">
										<div className="about-icon-wrapper">
											{item.icon}
										</div>									
									</div>
									<div className="about-contacts-text">
										<div className="about-contacts-title">{item.title}</div>
										<div className="about-contacts-content">{item.text}</div>
									</div>
								</div>
							);
						})}
						
					</div>
				</div>
			</div>
		);
	}
}

export default AboutContacts;