import React, { Component } from 'react';

class GoTop extends Component{
	render(){
		return (
			<button id="goTop">
				<i className="fas fa-chevron-circle-up"></i>
			</button>
		)
	}
	toggleGoTop = () => {
		window.scrollY > 300 ? document.querySelector("#goTop").style.display = "block" : document.querySelector("#goTop").style.display = "none"
	}
	componentDidMount(){
		document.querySelector("#goTop").addEventListener('click', () => {
			window.scroll({top: 0, behavior: "smooth"});
		});
		
		window.addEventListener('scroll', this.toggleGoTop);
		
		window.addEventListener('load', this.toggleGoTop);
	}
}

export default GoTop;