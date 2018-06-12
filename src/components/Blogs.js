import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CurrentLocation from "./CurrentLocation";
import Calendar from 'react-calendar'

class Blogs extends Component {
	constructor(props){
		super(props);
		this.state = {
			news: [
				{
					newsDay: "24",
					newsMonth: "May",
					newsImg: "./images/carousel-1.jpeg",
					newsAuthor: "John",
					newsCat: "Dinning Room",
					newsHeadline: "Sed rutrum feugiat ligula quis maximus.",
					newsExcerpt: "Aenean sed lacus vitae enim dictum molestie sit amet nec urna. Vivamus quis scelerisque enim. Vivamus at massa nec neque sodales finibus. Vivamus et nisl a odio pellentesque dignissim tincidunt at lorem..."
				},
				{
					newsDay: "22",
					newsMonth: "May",
					newsImg: "./images/carousel-2.jpeg",
					newsAuthor: "Ronaldo",
					newsCat: "Selecting Furnitue",
					newsHeadline: "Aliquam lobortis ipsum in nisl pharetra rhoncus",
					newsExcerpt: "Quisque pellentesque fermentum felis, et ullamcorper lorem. Aliquam at lorem lacinia, eleifend turpis ut, interdum augue. Suspendisse quis orci viverra, commodo mi condimentum..."
				},
				{
					newsDay: "26",
					newsMonth: "Apr",
					newsImg: "./images/carousel-3.jpeg",
					newsAuthor: "Kobe",
					newsCat: "Super Toilet",
					newsHeadline: "Fusce laoreet, ex vitae vehicula sagittis",
					newsExcerpt: "Mauris dignissim arcu massa, ut laoreet odio tristique nec. Praesent condimentum vulputate libero, vel dapibus leo facilisis ut. Praesent fermentum molestie magna sit amet fermentum..."
				},
				{
					newsDay: "07",
					newsMonth: "Apr",
					newsImg: "./images/carousel-4.jpeg",
					newsAuthor: "Bryan",
					newsCat: "Warm Bedroom",
					newsHeadline: "Nam molestie diam a justo ullamcorper",
					newsExcerpt: "Nulla convallis erat justo, id suscipit felis congue in. Nunc non elementum eros, non semper tortor. Donec aliquam nunc vel sodales efficitur. Nam nec odio fringilla, vulputate urna quis, tincidunt metus. Pellentesque condimentum ac erat at tempor..."
				}
			]
		}
	}
	render(){
		return (
			<div id="blogs">
				<CurrentLocation place={this.props.match.url}/>
				<div className="container blogs-container">
					<div className="row">
						<div className="col-md-8 col-xs-12 blogs-column">
							
							{this.state.news.map( (item, i) => {								
								return (
									<div className="blogs-single" key={i}>
										<div className="blogs-subtle">
											<div className="blogs-date">
												<time>
													<div className="blogs-day">{item.newsDay}</div>
													<div className="blogs-month">{item.newsMonth}</div>
												</time>
											</div>
											<div className="blogs-social">
												<ul>
													<li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
													<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
													<li><Link to="#"><i className="fab fa-google"></i></Link></li>
													<li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
													<li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="blogs-details">
											<Link to="#">
												<div className="blogs-img">
													<img src={item.newsImg} />
												</div>
												<div className="blogs-content">
													<div className="blogs-author">By {item.newsAuthor} in <span><Link to="/">{item.newsCat}</Link></span></div>
													<div className="blogs-headline">{item.newsHeadline}</div>
													<div className="blogs-excerpt">{item.newsExcerpt}</div>
												</div>
											</Link>
										</div>
									</div>
								)
							})}
							
							<ul className="pagination pagination-lg">
								<li><Link to="#">1</Link></li>
								<li><Link to="#">2</Link></li>
								<li><Link to="#">3</Link></li>
								<li><Link to="#">4</Link></li>
								<li><Link to="#">5</Link></li>
							</ul>

						{/* .col-md-8 blogs-column*/}	
						</div>
						
						<div className="col-md-4 col-xs-12 blogs-sidebar">
							<div className="sidebar-wrapper">
							
								<div className="sidebar-element">
									<div className="sidebar-search">
										<div className="sidebar-title">SEARCH</div>
										<form>
											<div className="input-group">
												<input type="text" className="form-control input-lg" placeholder="Enter Keyword..." />
												<div className="input-group-btn">
													<button className="btn btn-lg" type="submit">Search</button>
												</div>
											</div>
										</form>
									</div>
								</div>
								
								<div className="sidebar-element">
									<div className="sidebar-categories">
										<div className="sidebar-title">CATEGORIES</div>
											<ul>
												<li><Link to="#">dolor sit</Link></li>
												<li><Link to="#">consectetu</Link></li>
												<li><Link to="#">Proin non</Link></li>
												<li><Link to="#">lobortis arcu</Link></li>
												<li><Link to="#">Sed ultricies</Link></li>
												<li><Link to="#">sapien est</Link></li>
											</ul>
									</div>
								</div>
								
								<div className="sidebar-element">
									<div className="sidebar-recent-posts">
										<div className="sidebar-title">RECENT POSTS</div>
										
										<div className="sidebar-recent-wrapper">
											<div className="sidebar-recent-single">
												<div className="sidebar-recent-date">May 25, 2018</div>
												<div className="sidebar-recent-headline">
													<Link to="#">Cras tincidunt lectus velit, eu ornare felis cursus id.</Link>
												</div>
											</div>
											
											<div className="sidebar-recent-single">
												<div className="sidebar-recent-date">May 25, 2018</div>
												<div className="sidebar-recent-headline">
													<Link to="#">Cras tincidunt lectus velit, eu ornare felis cursus id.</Link>
												</div>
											</div>
											
											<div className="sidebar-recent-single">
												<div className="sidebar-recent-date">May 25, 2018</div>
												<div className="sidebar-recent-headline">
													<Link to="#">Cras tincidunt lectus velit, eu ornare felis cursus id.</Link>
												</div>
											</div>
											
											<div className="sidebar-recent-single">
												<div className="sidebar-recent-date">May 25, 2018</div>
												<div className="sidebar-recent-headline">
													<Link to="#">Cras tincidunt lectus velit, eu ornare felis cursus id.</Link>
												</div>
											</div>
											
											<div className="sidebar-recent-single">
												<div className="sidebar-recent-date">May 25, 2018</div>
												<div className="sidebar-recent-headline">
													<Link to="#">Cras tincidunt lectus velit, eu ornare felis cursus id.</Link>
												</div>
											</div>
										</div>
										
									</div>
								</div>
								
								<div className="sidebar-element">
									<div className="sidebar-recent-comments">
										<div className="sidebar-title">RECENT COMMENTS</div>
										<div className="sidebar-comments-wrapper">
										
											<div className="sidebar-comments-single">
												<div className="sidebar-commentor">
													Someone On
												</div>
												<div className="sidebar-comment-text">
													<Link to="#">Sed vulputate quam ac est fermentum egestas.</Link>
												</div>
											</div>
											
											<div className="sidebar-comments-single">
												<div className="sidebar-commentor">
													Someone On
												</div>
												<div className="sidebar-comment-text">
													<Link to="#">Sed vulputate quam ac est fermentum egestas.</Link>
												</div>
											</div>
											
											<div className="sidebar-comments-single">
												<div className="sidebar-commentor">
													Someone On
												</div>
												<div className="sidebar-comment-text">
													<Link to="#">Sed vulputate quam ac est fermentum egestas.</Link>
												</div>
											</div>
											
											<div className="sidebar-comments-single">
												<div className="sidebar-commentor">
													Someone On
												</div>
												<div className="sidebar-comment-text">
													<Link to="#">Sed vulputate quam ac est fermentum egestas.</Link>
												</div>
											</div>
											
											<div className="sidebar-comments-single">
												<div className="sidebar-commentor">
													Someone On
												</div>
												<div className="sidebar-comment-text">
													<Link to="#">Sed vulputate quam ac est fermentum egestas.</Link>
												</div>
											</div>
											
										</div>
									</div>
								</div>
								
								<div className="sidebar-element">
									<div className="sidebar-tags">
										<div className="sidebar-title">RECENT COMMENTS</div>
										<div className="sidebar-tags-wrapper">
											<button className="btn btn-lg">Cras suscipit</button>
											<button className="btn btn-lg">Vivamus</button>
											<button className="btn btn-lg">Cras gravida</button>
											<button className="btn btn-lg">Nullam</button>
											<button className="btn btn-lg">Viverra</button>
											<button className="btn btn-lg">Ut vestibulum</button>
											<button className="btn btn-lg">Duis</button>
										</div>
									</div>
								</div>
								
								<div className="sidebar-element">
									<div className="sidebar-archieve">
										<div className="sidebar-title">ARCHIEVE</div>
										<form className="form-group form-group-lg">
											<div className="input-group">												
												<div className="input-group-btn">
													<select className="form-control">
														<option>Select Month</option>
														<option>Jan</option>
														<option>Feb</option>
														<option>Mar</option>
													</select>
												</div>
											</div>
										</form>									
									</div>
								</div>
								
								<div className="sidebar-element">
									<div className="sidebar-calendar">
										<div className="sidebar-title">CALENDAR</div>
										<Calendar />
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	componentDidMount(){
	}
}

export default Blogs;