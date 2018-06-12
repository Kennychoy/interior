import React, { Component } from 'react';
import CurrentLocation from "./CurrentLocation";

class Pricing extends Component {
	constructor(props){
		super(props);
		this.state = {
			table: [
				{
					planName: "PLAN #1",
					planPrice: "$1023",
					planText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id congue libero. Duis at vestibulum nisi. Fusce luctus vestibulum nisi.",
					planList: ["Praesent vehicula", "Nullam ac", "Dolor vestibulum", "Aliquam arcu"]
				},
				{
					planName: "PLAN #2",
					planPrice: "$1333",
					planText: "Maecenas ac cursus quam. Curabitur eleifend scelerisque diam viverra cursus. Etiam vestibulum nulla quam.",
					planList: ["Mattis ut ", "Ornare quis", "Fermentum", "Et neque"]
				},
				{
					planName: "PLAN #3",
					planPrice: "$2223",
					planText: "Mauris euismod pharetra erat a euismod. In at turpis quam. Nulla eget dapibus erat, a hendrerit turpis. Curabitur diam erat.",
					planList: ["Duis quis", "Rutrum neque", "Malesuada orci", "Integer ut"]
				},
			]
		}
	}
	render(){
		return (
			<div id="pricing">
				<CurrentLocation place={this.props.match.url}/>
				<div className="container pricing-container">
					<div className="row">
						<div className="pricing-headline">PRICING TABLES</div>
						<div className="pricing-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id congue libero. Duis at vestibulum nisi. Fusce luctus vestibulum nisi, vitae volutpat nisi ullamcorper tempor.</div>
						
						{this.state.table.map( (item, i) => {
							return (
								<div className="col-md-4 col-sm-6 col-xs-12">
									<div className="price-outer">
										<div className="price-top">
											<div className="price-top-plan">{item.planName}</div>
											<div className="price-top-price">
												{item.planPrice}<br /><span className="price-month">Monthly</span>
											</div>
											<div className="price-top-text">{item.planText}</div>
										</div>
										<div className="price-bottom">
											<ul>
												<li><span className="glyphicon glyphicon-ok"></span>{item.planList[0]}</li>
												<li><span className="glyphicon glyphicon-ok"></span>{item.planList[1]}</li>
												<li><span className="glyphicon glyphicon-ok"></span>{item.planList[2]}</li>
												<li><span className="glyphicon glyphicon-ok"></span>{item.planList[3]}</li>
											</ul>
											<button type="button">MAKE AN APPOINTMENT</button>
										</div>
									</div>
								</div>
							);
						})}
						
					</div>
				</div>
			</div>
		);
	}
	componentDidMount(){

	}
}

export default Pricing;