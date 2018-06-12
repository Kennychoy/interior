import React, { Component } from 'react';
import CurrentLocation from "./CurrentLocation";

class Clients extends Component {
	constructor(props){
		super(props);
		this.state = {
			logos: [
				{
					logo: "./images/logo-1.png",
					name: "Nam tristique",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis consectetur rutrum. Etiam ac libero ac tortor volutpat."
				},
				{
					logo: "./images/logo-2.png",
					name: "Proin nisi",
					text: "Curabitur dapibus, dolor vitae ultricies placerat, magna eros euismod orci, sit amet tellus diam iaculis erat. Suspendisse potenti."
				},
				{
					logo: "./images/logo-3.png",
					name: "Nullam mi",
					text: "Suspendisse placerat rutrum. Aliquam congue facilisis. Maecenas ultrices tristique tortor dictum fermentum. Curabitur varius."
				},
				{
					logo: "./images/logo-4.png",
					name: "Augue dignissim",
					text: "Phasellus scelerisque nulla nulla. Lorem ipsum dolor neque placerat sit amet, consectetur adipiscing elit. Praesent, varius hendrerit, est odio."
				},
				{
					logo: "./images/logo-5.png",
					name: "Duis eget",
					text: "Cras vel nisi sed mauris sagittis vulputate. Aenean gravida ligula id libero cursus semper. Fusce ut sem est. Phasellus sit dictum fermentum."
				},
				{
					logo: "./images/logo-6.png",
					name: "Ut interdum",
					text: "Praesent vel ac libero ac aliquam. Maecenas dui sit amet porta, sapien iaculis, porta nibh. Ut sit amet odio sit amet ipsum, ut sem luctus."
				}
			],
			quotes: [
				{
					quoteText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ligula tincidunt, fermentum erat vitae. Nunc iaculis nulla elit, ut accumsan lacus rhoncus at. Sed rhoncus, nibh sit amet maximus sollicitudin, id consectetur libero felis vitae leo.",
					quoteFace: "./images/quotes-1.jpeg",
					quoteName: "Big Brother",
					quoteTitle: "Accountant"
				},
				{
					quoteText: "Sed rhoncus, nibh sit amet maximus sollicitudin, risus justo volutpat urna, id consectetur libero felis vitae leo. Quisque faucibus ex in lectus luctus, ut mollis diam sollicitudin. In sollicitudin porttitor diam. Ut ac lacus eu ex hendrerit convallis a sit amet felis.",
					quoteFace: "./images/quotes-2.jpeg",
					quoteName: "Alien Woo",
					quoteTitle: "CEO"
				},
				{
					quoteText: "Aliquam erat volutpat. Donec vel urna erat. Etiam pretium porta est vitae euismod. Nullam gravida tortor id mauris luctus, in vulputate leo sagittis. Etiam sodales leo sit amet semper fermentum. Suspendisse justo ante, dignissim in erat dapibus, vehicula ullamcorper velit.",
					quoteFace: "./images/quotes-3.jpeg",
					quoteName: "Monster William",
					quoteTitle: "CFO"
				},
				{
					quoteText: "Duis pharetra tellus turpis, nec vestibulum est rhoncus porta. In hac habitasse platea dictumst. Pellentesque aliquet libero id tortor finibus efficitur. Fusce odio magna, semper nec velit vel, elementum tincidunt purus. Phasellus vel placerat metus ullamcorper ut.",
					quoteFace: "./images/quotes-4.jpeg",
					quoteName: "Freak John",
					quoteTitle: "Senior Staff"
				},
				{
					quoteText: "Cras sed lorem ultricies, dictum nunc eu, elementum nunc. Aliquam mollis ac erat at lobortis. Praesent ac sapien quis arcu condimentum fermentum. Aenean faucibus varius massa. Aliquam interdum, est in lobortis commodo, metus sapien tempor mi.",
					quoteFace: "./images/quotes-5.jpeg",
					quoteName: "Oh Yeah",
					quoteTitle: "PassesBy"
				},
			]
		}
	}
	render(){
		return (
			<div id="clients">
			
				<CurrentLocation place={this.props.match.url}/>
				
				<div className="container-fluid clients-container-top">
					<div className="row">
						<div className="col-xs-12">
							<div className="clients-top-layer"></div>
							<div className="clients-top-surface">
								<h2>Lorem Ipsum is simply dummy text of the printing</h2>
								<h4>Sed viverra bibendum ipsum in ultrices. Donec rhoncus laoreet nibh nec finibus. Proin eu magna libero. Duis vitae est condimentum, feugiat felis a, aliquet massa.</h4>							
							</div>
						</div>
					</div>
				</div>
				
				<div className="container clients-container-middle">
					<div className="row">
						<div className="clients-middle-title">OUT CLIENTS</div>						
					
						{this.state.logos.map( (item, i) => {
							return (
								<div className="col-md-4 col-xs-6" key={i}>
									<div className="clients-wrapper">
										<div className="clients-logo">
											<img src={item.logo} />
										</div>
										<div className="clients-name">{item.name}</div>
										<div className="clients-text">{item.text}</div>
									</div>
								</div>
							);
						})}
						
					</div>
				</div>
				
				<div className="clients-quotes">
					<div className="container">
						<div className="quotes-title">WHAT PEOPLE THINK ABOUT US</div>
						<div className="quotes-wrapper">						
							<div className="row quotes-row">
							

								
								{this.state.quotes.map( (item, i) => {
									return (
										<div className="col-md-4 col-sm-6 col-xs-12" key={i}>
											<div className="single-quotes">
												<div className="quotes-text-box">
													<div className="quotation-mark">
														<i className="fas fa-quote-left"></i>
													</div>
													<div className="quote-text">
													{item.quoteText}
													</div>
												</div>
												<div className="quotes-person">
													<div className="qutoes-face">
														<img src={item.quoteFace} />
													</div>
													<div className="quotes-name">{item.quoteName}</div>
													<div className="quotes-position">{item.quoteTitle}</div>
												</div>
											</div>
										</div>
									)
								})}
								
							</div>							
						</div>
					</div>
				</div>
				
			{/* #client */}
			</div>
		);
	}
	componentDidMount(){
		let quotesRow = document.querySelector(".quotes-row");
		let pos = 20;
		setInterval( () => {
			quotesRow.style.transform == `translateX(-${window.innerWidth > 991 ? 40 : window.innerWidth > 768 ? 60 : 80}%)` ? init() : toLeft();
		},1000);
		function toLeft(){
			quotesRow.style.transform = `translateX(-${pos}%)`
			pos += 20;
		};
		function init(){
			quotesRow.style.transform = "translateX(0%)"
			pos = 0;
		}
	}
}

export default Clients;