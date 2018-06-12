import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Link, NavLink, Route} from "react-router-dom";

class PageDropDown extends Component {
	render(){
		return (
				<div className="container pages-dropdown">
					<div className="breathe-room"></div>
					<div className="row">
						<div className="col-md-3 col-sm-3 col-sm-offset-2">						
							<ul>
								<li><h4>Sub Page</h4></li>
								<li><NavLink to="/about"><span className="masking-arrow"></span><i className="fas fa-angle-right"></i>About</NavLink></li>
								<li><NavLink to="/vacancies"><span className="masking-arrow"></span><i className="fas fa-angle-right"></i>Vacancies</NavLink></li>
								<li><NavLink to="/pricing"><span className="masking-arrow"></span><i className="fas fa-angle-right"></i>Pricing</NavLink></li>
								<li><NavLink to="/clients"><span className="masking-arrow"></span><i className="fas fa-angle-right"></i>Clients</NavLink></li>								
							</ul>
						</div>
					</div>
				</div>
		)
	}
	componentDidMount(){
		let x = document.querySelectorAll(".pages-dropdown .col-md-3");
		let y = Array.from(x);
		y.forEach(div => {
			
		});
	}
}

export default PageDropDown;