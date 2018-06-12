import React, { Component } from 'react';

class HomeWorks extends Component {
	constructor(props){
		super(props);
		this.state = {			
			gallery: [
				{
					imgPath: "./images/works-1.jpeg", 
					title: "Gallery", 
					text: "in your room"
				},
				{
					imgPath: "./images/works-2.jpg", 
					title: "Clean", 
					text: "and warm"
				},
				{
					imgPath: "./images/works-3.jpeg", 
					title: "One Pic", 
					text: "thousand words"
				},
				{
					imgPath: "./images/works-4.jpeg", 
					title: "Tastes old", 
					text: "feels good"
				},
				{
					imgPath: "./images/works-5.jpeg", 
					title: "B/W Pics", 
					text: "Colorful life"
				}
			]
		}
	}
	render(){
		return (
			<div id="home-works">
				<div className="container">
					<div className="home-works-title"><center>Works</center></div>
					<div className="row">
						
						{this.state.gallery.map( (item, i) => {
							return (
							<div className="col-md-6 col-xs-12" key={i}>
								<div className="works-wrapper">
									<img src={item.imgPath} className="img-responsive" />
									<div className="works-layer">
										<div className="works-description-wrapper">
											<div className="works-icons"><i className="fas fa-people-carry"></i></div>
											<div className="works-title">{item.title}</div>
											<div className="works-text">{item.text}</div>										
										</div>
									</div>
								</div>
							</div>
							)
						})}
						
					</div>
				</div>
			</div>
		)
	}
}

export default HomeWorks;