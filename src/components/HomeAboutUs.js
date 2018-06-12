import React, { Component } from 'react';


export default () => (
	<div className="home-about-us">
		<div className="container">
		
			<div className="col-md-4 col-xs-12">
				<div className="title">About Us</div>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
				<p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
				<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>				
			</div>
			
			<div className="col-md-8 col-xs-12">
			
				<div className="about-items">
					<div className="about-items-icon"><i className="fas fa-font"></i></div>
					<div className="about-items-text">
						<div className="about-items-title">A Grade Design</div>
						<div className="about-items-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
					</div>
				</div>
				<div className="about-items">
					<div className="about-items-icon"><i className="fas fa-hand-holding-heart"></i></div>
					<div className="about-items-text">
						<div className="about-items-title">Care your needs</div>
						<div className="about-items-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
					</div>
				</div>
				<div className="about-items">
					<div className="about-items-icon"><i className="far fa-handshake"></i></div>
					<div className="about-items-text">
						<div className="about-items-title">Good partner</div>
						<div className="about-items-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
);