import React, { Component } from 'react';
import {Link} from "react-router-dom";

class HomeTestimonials extends Component {
	showQuote = (e) => {
		let target = e.target.parentElement.parentElement;
		let index = Array.from(document.querySelector("#testimonials-list").children).indexOf(target);
		let percentage = (index * (100 / document.querySelector("#testimonials-list").children.length)) + "%";
		document.querySelector(".quotes").style.transform = "translateX(-"+percentage+")";		
	}
	render(){
		return (
			<div id="home-testimonials">
				<div className="container">
					<div className="home-testimonials-title">Testimonials</div>
					<div className="row">
						
						<div className="col-xs-8">
							<div className="quotes-outer">
								<div className="quotes">
								
									<div className="quotes-wrapper">
										<div className="quotes-name">Donald Trump</div>
										<div className="quotes-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
									</div>
									
									<div className="quotes-wrapper">
										<div className="quotes-name">Second Person</div>
										<div className="quotes-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium non metus ac condimentum. Quisque fringilla fermentum magna, vel molestie ante rhoncus non. Mauris pretium sed dolor ut ornare. Aliquam at iaculis lectus. Maecenas id leo nec eros pellentesque ullamcorper a at dolor.</div>
									</div>
									
									<div className="quotes-wrapper">
										<div className="quotes-name">A Third One</div>
										<div className="quotes-text">Etiam sapien arcu, hendrerit vitae metus quis, mattis dapibus urna. Nunc dignissim est et maximus porta. Nullam ac diam dui. Sed sed mi id justo varius luctus. Nam egestas nunc vel sem eleifend viverra. Nunc aliquam nibh felis, ut gravida nisl finibus non. Lorem ipsum dolor sit amet.</div>
									</div>
									
								</div>
							</div>
							
								<ul id="testimonials-list">
									<li onClick={this.showQuote}><Link to="#"><img src="images/quotes-1.jpeg" /></Link></li>
									<li onClick={this.showQuote}><Link to="#"><img src="images/quotes-2.jpeg" /></Link></li>
									<li onClick={this.showQuote}><Link to="#"><img src="images/quotes-3.jpeg" /></Link></li>
								</ul>
								
							</div>
							
					</div>
				</div>
			</div>
		);
	}
}

export default HomeTestimonials;