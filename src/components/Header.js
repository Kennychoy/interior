import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Link, NavLink, Route} from "react-router-dom";

import PageDropDown from "./PageDropDown";

class Header extends Component {
	showSearch = () => {		
		document.querySelector(".search").style.transform = "translateY(0)";
		document.querySelector(".lower-container .navbar").style.transform = "translateY(-100%)";		
	}
	hideSearch = () => {
		document.querySelector(".search").style.transform = "translateY(-100%)";
		document.querySelector(".lower-container .navbar").style.transform = "";	
	}
	menuArrowDirection = () => {
		let menuArrow = document.querySelector("#menuArrow");
		window.innerWidth < 768 ? menuArrow.classList.replace("fa-angle-down", "fa-angle-right") : menuArrow.classList.replace("fa-angle-right", "fa-angle-down");
	}
	render(){
		return (
			<div id="header">
				<nav className="navbar">
				
					<div className="container upper-container">
						<div className="navbar-header">
						
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span> 
							</button>
							
							<Link to="/" className="navbar-brand">INTERIOR</Link>
						</div>

						<ul className="nav navbar-nav navbar-right">
							<li><a><i className="fas fa-map-marker"></i>#1 Next St., ABC City, HK</a></li>
							<li><a><i className="fas fa-envelope"></i>example@example.com</a></li>
							<li><a><i className="fas fa-phone"></i>+12 345 678 99</a></li>
						</ul>
					</div>

					<div className="container lower-container collapse navbar-collapse" id="myNavbar">
					
						<nav className="navbar">
							<div className="container">
								<ul className="nav navbar-nav">
									<li><NavLink to="/">HOME</NavLink></li>
									<li><NavLink to="#">PAGES<i className="fas fa-angle-down" id="menuArrow"></i></NavLink>
										<PageDropDown />
									</li>
									<li><NavLink to="/notfound">404 Page</NavLink></li>
									<li><NavLink to="/blogs">BLOGS</NavLink></li>
									<li><NavLink to="/contacts">CONTACTS</NavLink></li>
								</ul>
								<ul className="nav navbar-nav navbar-right">
									<li onClick={this.showSearch}><Link to="/"><i className="fas fa-search"></i></Link></li>
								</ul>
							</div>
						</nav>
						
						<div className="search">
							<nav className="navbar">
								<div className="container">
									<ul className="nav navbar-nav">
										<li>
											<Link to="#">
												<i className="fas fa-search"></i>
												<input type="text" placeholder="Enter keyword..."/>
											</Link>
										</li>										
									</ul>
									<ul className="nav navbar-nav navbar-right">
										<li><Link to="/">SEARCH</Link></li>
										<li onClick={this.hideSearch}><Link to="/"><i className="fas fa-times"></i></Link></li>
									</ul>
								</div>
							</nav>
						</div>
					</div>

				</nav>
				
			</div>
		);
	}
	componentDidMount(){
		window.addEventListener("resize", this.menuArrowDirection);
		window.addEventListener("load", this.menuArrowDirection);
	}
}

export default Header;