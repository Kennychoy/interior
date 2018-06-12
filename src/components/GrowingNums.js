import React, { Component } from 'react';

class GrowingNums extends Component {
	render(){
		return (
			<div id="growing-nums">
				<div className="container">
					<div className="row">
					
						<NumsDetails icon="fab fa-angellist" nums="1234" description="Finished Projects" />
						<NumsDetails icon="fab fa-buromobelexperte" nums="2345" description="Builds" />
						<NumsDetails icon="fas fa-check" nums="3221" description="Whatever" />
						<NumsDetails icon="far fa-building" nums="2456" description="Achievement" />
						
					</div>
				</div>
			</div>
		)
	}
}



class NumsDetails extends Component {
	constructor(props){
		super(props)
		this.state = {
			num: 0
		}
	}

	handleScroll = () => {
		if(this.refs.numDiv){
			if(this.refs.numDiv.getBoundingClientRect().top < window.innerHeight * .9){
				setInterval(() => {
					if(this.props.nums > this.state.num){
						this.setState(prevState => ({num: prevState.num+1}));
					}					
				},1);
			}
		}
	}
	
	render(){
		return (
			<div className="col-md-3 col-xs-6">
				<div className="nums-icons"><i className={this.props.icon}></i></div>
				<div className="nums" ref="numDiv">{(this.state.num).toLocaleString()}</div>
				<div className="nums-description">{this.props.description}</div>
			</div>
		)
	}
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('load', this.handleScroll);
	}
}

export default GrowingNums;