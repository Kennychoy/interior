import React, { Component } from 'react';

import HomeCarousel from "./HomeCarousel";
import HomeAboutUs from "./HomeAboutUs";
import WhatWeOffer from "./WhatWeOffer";
import GrowingNums from "./GrowingNums";
import HomeWorks from "./HomeWorks";
import HomeTestimonials from "./HomeTestimonials";
import HomeNews from "./HomeNews";

class Home extends Component {
	render(){
		return (
			<div className="home-content">
				<HomeCarousel />
				<HomeAboutUs />
				<WhatWeOffer />
				<GrowingNums />
				<HomeWorks />
				<HomeTestimonials />
				<HomeNews />
			</div>
		);
	}
}

export default Home;