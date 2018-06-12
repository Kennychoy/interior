import React, { Component } from 'react';

class HomeCarousel extends Component {
	render(){
		return (
			<div id="home-carousel">
			
				<div className="container-fluid">

					<div id="myCarousel" className="carousel slide" data-ride="carousel">
					
							{/* Indicators */}
						<ol className="carousel-indicators">
							<li data-target="#myCarousel" data-slide-to="0" className="active">01</li>
							<li data-target="#myCarousel" data-slide-to="1">02</li>
							<li data-target="#myCarousel" data-slide-to="2">03</li>
							<li data-target="#myCarousel" data-slide-to="3">04</li>
						</ol>

							{/* Wrapper for slides */}
						<div className="carousel-inner" role="listbox">

							<div className="item active">
								<img src="./images/carousel-1.jpeg" className="img-responsive" />
								<div className="carousel-caption">
									<h3>Simple</h3>
									<p>Black and white home</p>
								</div>
							</div>

							<div className="item">
								<img src="./images/carousel-2.jpeg" className="img-responsive" />								
								<div className="carousel-caption">
									<h3>Woody</h3>
									<p>A home that make you feels warm</p>
								</div>
							</div>
								
							<div className="item">
								<img src="./images/carousel-3.jpeg" className="img-responsive" />
								<div className="carousel-caption">
									<h3>Grey</h3>
									<p>Won't look dirty but grand</p>
								</div>
							</div>

							<div className="item">
								<img src="./images/carousel-4.jpeg" className="img-responsive" />
								<div className="carousel-caption">
									<h3>Gallery</h3>
									<p>Life of art</p>
								</div>
							</div>
						  
						</div>

							{/* Left and right controls */}
						<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
							<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
							<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					
						{/* #myCarousel */}
					</div>
					{/* .container-fluid*/}
				</div>
			{/* #home-carousel*/}	
			</div>
		)
	}
}
	
export default HomeCarousel;