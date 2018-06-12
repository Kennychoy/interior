import React, { Component } from 'react';
import CurrentLocation from "./CurrentLocation";

class Vacancies extends Component {
	constructor(props){
		super(props);
		this.state = {
			jobs: [
				{
					jobTitle: "CSS Manager",
					jobImg: "./images/vacancies1.jpeg",
					jobDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				},
				{
					jobTitle: "Senior HTML Officer",
					jobImg: "./images/vacancies2.jpeg",
					jobDescription: "Quisque hendrerit est dapibus neque sodales sagittis. Ut cursus tincidunt est, at fermentum justo ultricies dictum. Duis mauris urna, finibus quis pretium eget, rhoncus et tortor. Vivamus quis leo fringilla, condimentum sem non, consectetur ante."
				},
				{
					jobTitle: "JS Specialist",
					jobImg: "./images/vacancies3.jpeg",
					jobDescription: "Suspendisse ornare leo in posuere iaculis. Mauris id fermentum enim. Aliquam mollis turpis et fringilla ultricies. Donec eget dui ultricies, suscipit arcu in, ultricies orci. Proin viverra tellus a eros ultricies, sit amet scelerisque sapien varius. Pellentesque at massa a sem laoreet viverra."
				},
				{
					jobTitle: "Node Guy",
					jobImg: "./images/vacancies4.jpeg",
					jobDescription: "Donec porta arcu ac vulputate auctor. Suspendisse eu nisl orci. Duis ultricies arcu velit, et feugiat lectus pharetra et. Donec nec blandit sapien. Integer dignissim turpis at erat fermentum fermentum. Quisque at neque mollis, luctus ipsum eget, imperdiet metus."
				},
			]
		}
	}
	render(){
		return (
			<div id="vacancies">
				<CurrentLocation place={this.props.match.url}/>
				<div className="container jobs-container">
					<div className="row">
						<div className="vacancies-headline">CURRENT VACANCIES LIST</div>
						<div className="col-xs-12">
						

							
							{this.state.jobs.map( (item, i) => {
								return (
									<div className="vacancies-wrapper panel-group" id={'vacancies-accordion-'+i} key={i} data-custom={i}>
										<div className="vacancies-container panel panel-default">
											<div className="vacancies-title panel-title" data-toggle="collapse" data-parent="#vacancies-accordion" data-target={"#vacancies-"+i}>
												{item.jobTitle}										
												<div className="expand-icon">
													<span className="hor-icon">|</span>
													<span className="ver-icon">|</span>
												</div>
												
											</div>
											<div id={"vacancies-"+i} className="vacancies-description panel-collapse collapse">
												<div className="panel-body">
													<img src={item.jobImg} className="img-responsive"/>
													<div className="vacancies-text">
														{item.jobDescription}
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
							
						</div>
					</div>
				</div>
			</div>
		);
	}
	componentDidMount(){
		document.querySelectorAll(".panel-title").forEach( panel => {
			panel.addEventListener("click", (e) => {
				panel.getAttribute("aria-expanded") != 'true' ? panel.children[0].children[1].style.transform = "translate(-50%, -50%) rotate(90deg)" : panel.children[0].children[1].style.transform = "translate(-50%, -50%) rotate(0deg)";
				console.log(panel)
			});
		})
	}
}

export default Vacancies;