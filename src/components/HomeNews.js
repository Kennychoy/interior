import React, { Component } from 'react';
import {Link} from "react-router-dom";

class HomeNews extends Component {
	constructor(props){		
		super(props);
		this.state = {
			news: [
				{
					linkPath: "#", 
					imgPath: "./images/carousel-1.jpeg", 
					newsHeadline: "Lorem Ipsum is simply dummy text", 
					newsText: "of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				},
				{
					linkPath: "#", 
					imgPath: "./images/carousel-2.jpeg", 
					newsHeadline: "Lorem Ipsum is simply dummy text", 
					newsText: "of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				},
			],
			smallNews: [
				{
					imgPath: "./images/small-news-1.jpeg", 
					headline: "Title here", 
					text: "Can't think of what to describe"
				},
				{
					imgPath: "./images/small-news-2.jpeg", 
					headline: "Title here", 
					text: "Can't think of what to describe"
				},
				{
					imgPath: "./images/small-news-3.jpeg", 
					headline: "Title here", 
					text: "Can't think of what to describe"
				},
				{
					imgPath: "./images/small-news-4.jpeg", 
					headline: "Title here", 
					text: "Can't think of what to describe"
				},
				{
					imgPath: "./images/small-news-5.jpeg", 
					headline: "Title here", 
					text: "Can't think of what to describe"
				},
				{
					imgPath: "./images/small-news-6.jpeg", 
					headline: "Title here", 
					text: "Can't think of what to describe"
				}
			]
		}
	}
	render(){
		return (
			<div id="home-news">
				<div className="container">
					<div className="home-news-title">NEWS</div>
					<div className="row">
						
						{this.state.news.map( (item, i) => {
							return (
								<div className="col-xs-6" key={i}>
									<div className="home-news-img">
										<Link to={item.linkPath}>
											<img src={item.imgPath} />
										</Link>
									</div>
									<div className="home-news-headline">
										<Link to={item.linkPath}>{item.newsHeadline}</Link>
									</div>
									<div className="home-news-text">{item.newsText}</div>
								</div>
							)
						})}
						
					</div>
				</div>
				
				<div className="container-fluid">
					<div className="row">
						
						{this.state.smallNews.map( (item, i) => {
							return (
								<div className="col-md-2 col-xs-4" key={i}>
									<div className="small-news-wrapper">
										<div className="small-news">
											<img src={item.imgPath} />
											<div className="small-news-layer">
												<div className="small-news-details">
													<div className="small-news-icon"><i className="fas fa-bullseye"></i></div>
													<div className="small-news-headline">{item.headline}</div>
													<div className="small-news-text">{item.text}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						})}
						
					</div>
				</div>
			</div>
		);
	}
}

export default HomeNews;