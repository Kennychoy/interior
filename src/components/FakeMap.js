import React, { Component } from 'react';
import Map from 'react-js-google-maps';

const setMarker = (map) => {
	const position = { lat: 40.6700, lng: -73.9400 };
	const marker = new window.google.maps.Marker({
		position: position,
		map: map,
		animation: window.google.maps.Animation.BOUNCE
	});
	var cityCircle = new window.google.maps.Circle({
		strokeColor: '#877f6c',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: '#e8d7b4',
		fillOpacity: 0.35,
		map: map,
		center: position,
		radius: 500
	});
}

class FakeMap extends Component {
	render() {
		var mapOptions = {
			zoom: 15,
			center: {lat: 40.6700, lng: -73.9400},
			styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
        };
	return (
		<div>
			<Map
				id="map1"
				apiKey="AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w"
				mapOptions= {mapOptions}
				style={{ width: "100%", height: 300 }}
				onLoad={setMarker}
			/>
		</div>
		);
	}  
}

export default FakeMap;