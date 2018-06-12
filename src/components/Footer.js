import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
	constructor(props){
		super(props);
		this.state = {			
			ig: [
				{imgPath: "./images/small-news-1.jpeg"},
				{imgPath: "./images/small-news-2.jpeg"},
				{imgPath: "./images/small-news-3.jpeg"},
				{imgPath: "./images/small-news-4.jpeg"},
				{imgPath: "./images/small-news-5.jpeg"},
				{imgPath: "./images/small-news-6.jpeg"},
			]
		}
	}
	render(){
		return (
			<footer>
				<div className="upper-footer">
					<div className="container">
						<div className="row">
							<div className="col-md-4 footer-recent">
								<div className="footer-title">Recent Post</div>
								<div className="recent-wrapper">
								
									<div className="recent-single">
										<div className="recent-img">
											<img src="./images/small-news-1.jpeg" />
										</div>
										<div className="recent-content">
											<div className="recent-headline">
												<span className="recent-date">May 26, 2018</span> By <span className="recent-author">Beckham</span>
											</div>
											<div className="recent-excerpt">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
										</div>
									</div>
									
									<div className="recent-single">
										<div className="recent-img">
											<img src="./images/small-news-2.jpeg" />
										</div>
										<div className="recent-content">
											<div className="recent-headline">
												<span className="recent-date">May 26, 2018</span> By <span className="recent-author">Beckham</span>
											</div>
											<div className="recent-excerpt">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
										</div>
									</div>
									
									
								</div>
							</div>
							
							<div className="col-md-4 footer-instagram">
								<div className="footer-title">Instagram</div>	
									<div className="row">

									{this.state.ig.map( (item, i) => {
										return (
											<div className="col-xs-4" key={i}>
												<div className="ig-outer">
													<div className="ig-inner">
														<img src={item.imgPath} />
														<div className="ig-layer">
															<i className="fab fa-instagram"></i>
														</div>
													</div>
												</div>
											</div>	
										)
									})}

									</div>
							</div>
							
							<div className="col-md-4 footer-about">
								<div className="footer-title">About</div>
								<div className="footer-about-text">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
									<p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
								</div>
							</div>
						</div>
					</div>
				{/* .upper-footer */}
				</div>
				
				<div className="lower-footer">
					<nav className="navbar">
						<div className="container">
							<ul className="nav navbar-nav">
								<li><Link to="/">HOME</Link></li>
								<li><Link to="/about">ABOUT</Link></li>
								<li><Link to="/vacancies">VACANCIES</Link></li>
								<li><Link to="/blogs">BLOGS</Link></li>
								<li><Link to="/pricing">PRICES</Link></li>
								<li><Link to="/contacts">CONTACTS</Link></li>
							</ul>
						</div>
					</nav>
				</div>
				
			</footer>
		);
	}
}

export default Footer;