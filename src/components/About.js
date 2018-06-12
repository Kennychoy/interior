import React, { Component } from 'react';
import AboutContacts from "./AboutContacts";
import CurrentLocation from "./CurrentLocation";

class About extends Component {
	constructor(props){
		super(props);
		this.state = {
			icons : [
				{
					icon: <i className='far fa-clock'></i>, 
					iconTitle: "Always Avaiable", 
					iconText: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est a neque bibendum fringilla at quis leo.</p>
				},
				{
					icon: <i className="fas fa-user-clock"></i>, 
					iconTitle: "Lorem ipsum", 
					iconText: <p>consectetur adipiscing elit. Maecenas euismod ante nec nunc iaculis, sit amet sodales sem laoreet. Quisque sodales metus consequat placerat tempor. Fusce ut suscipit nulla. Curabitur vel porta diam, ut sodales mauris.</p>
				},
				{
					icon: <i className="fas fa-chess-knight"></i>, 
					iconTitle: "Etiam tincidunt", 
					iconText: <p>Quisque sodales metus consequat placerat tempor. Fusce ut suscipit nulla. Curabitur vel porta diam, ut sodales mauris. Etiam tincidunt lacus sed.</p>
				},
				{
					icon: <i className="fab fa-chrome"></i>, 
					iconTitle: "lacus sed", 
					iconText: <p>Suspendisse non massa a dolor auctor consectetur. Maecenas sit amet enim quis diam ultrices egestas sed ut est. Cras porttitor finibus interdum. Nulla ullamcorper at tellus id eleifend. Praesent eget dui in tortor rhoncus dapibus ut vel ipsum.</p>
				}
			],
			qanda: [
				{
					question: "Lorem ipsum dolor sit amet?",
					answer: 'Sed mollis, lorem eu tincidunt convallis, nibh diam porta nisl, at gravida dui lorem nec ipsum. Suspendisse eu eros mattis, venenatis leo ut'
				},
				{
					question: "Pellentesque erat dui?",
					answer: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eu tincidunt nunc, et rhoncus nibh. Aliquam dapibus blandit purus ut eleifend. Ut non porta orci. Integer fermentum turpis vitae erat molestie.'
				},
				{
					question: "Integer fermentum turpis?",
					answer: 'Cras accumsan suscipit justo, nec gravida justo aliquam sit amet. Vivamus accumsan iaculis elit et porta. In congue elit ac tellus venenatis fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
				},
				{
					question: "Proin maximus condimentum?",
					answer: 'Sed eu turpis et nisl malesuada rutrum et ut odio. Nam venenatis risus vel velit cursus, bibendum vestibulum turpis dignissim. Ut ultrices, odio non ultricies scelerisque, nulla lacus porta purus.'
				},
			]
		}
	}
	render(){
		return (
			<div id="about">			
				
				<CurrentLocation place={this.props.match.url}/>
				
				<div className="appointment">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-12">
								<div className="appointment-layer"></div>
								<div className="appointment-surface">
									<h1>We'll be there at any time</h1>
									<h4>Contact our custom service to make an appointment</h4>
									<button className="btn">MAKE AN APPOINTMENT</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* appointment*/}
				
				<div className="about-description">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-xs-12 about-description-text">
								<h1>WE RE-DESIGN YOURS...</h1>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
								<p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
								<ul>
									<li><i className="fas fa-check"></i>Lorem ipsum</li>
									<li><i className="fas fa-check"></i>dolor sit amet</li>
									<li><i className="fas fa-check"></i>consectetur adipiscing</li>
									<li><i className="fas fa-check"></i>Sed eu est</li>
									<li><i className="fas fa-check"></i>neque bibendum</li>
									<li><i className="fas fa-check"></i>fringilla at quis</li>
									<li><i className="fas fa-check"></i>Donec rhoncus</li>
									<li><i className="fas fa-check"></i>felis in magna </li>
								</ul>
							</div>
							<div className="col-sm-6 col-xs-12 about-description-img">
								<img src="./images/about_description.jpeg" className="img-responsive"/>
							</div>
						</div>
					</div>
				</div>
				{/* .about-description*/}
				
				<div className="why-choose-us">
					<div className="container">
						<div className="row">
							<div className="choose-title">WHY CHOOSE US</div>

							
							{this.state.icons.map( (item, i) => {
								return (
									<div className="col-lg-3 col-sm-6 col-xs-12" key={i}>
										<div className="choose-icon">
											<div className="choose-icon-wrapper">
											{item.icon}
											</div>									
										</div>
										<div className="choose-description">
											{item.iconTitle}
										</div>
										<div className="choose-text">
											{item.iconText}
										</div>
									</div>
								);
							})}
							
						</div>
					</div>
				{/* .why-choose-us*/}	
				</div>
				
				<div className="mission_questions">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-xs-12 our-mission">
								<div className="mq-title">OUR MISSION</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget consequat mi. Sed mollis, lorem eu tincidunt convallis, nibh diam porta nisl, at gravida dui lorem nec ipsum.</p>
								<p>Suspendisse eu eros mattis, venenatis leo ut, pharetra est. Aenean sit amet velit purus. Quisque pretium nibh quis scelerisque semper. Pellentesque varius pretium bibendum. Integer mattis, justo at commodo molestie</p>
								<p>Nulla facilisi. Praesent scelerisque diam vitae lorem aliquam, eu viverra leo euismod. Suspendisse dictum neque ante, vitae mattis justo varius ut. Nulla eu dolor volutpat, egestas odio ut, tempor mauris. Fusce consectetur lacus nec sapien malesuada,</p>
								<button>OUR PROJECTS</button>
							</div>
							<div className="col-sm-6  col-xs-12 popular-questions">
								<div className="mq-title">POPULAR QUESTIONS</div>
								<div className="questions-wrapper">
									
									{this.state.qanda.map( (item, i) => {
										return (
											<div className="qanda" key={i}>
												<div className="question-q">
													<i className="fas fa-caret-right"></i>
													{item.question}
												</div>
												<div className="question-a hide-ans">
													{item.answer}
												</div>
											</div>
										);
									})}
									
								</div>
							</div>
						</div>
					</div>
				{/* .mission_questions*/}
				</div>				

				<AboutContacts />
			{/* about*/}
			</div>
		);
	}
	componentDidMount(){
		document.querySelectorAll(".question-q").forEach( question => {
			question.addEventListener("click", (e) => {
				e.target.nextSibling.classList.toggle("show-ans");				
				e.target.nextSibling.classList.contains("show-ans") ? e.target.children[0].style.transform = "rotate(90deg)" : e.target.children[0].style.transform = "rotate(0deg)";
			});
		});
	}
}

export default About;