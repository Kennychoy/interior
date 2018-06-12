import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, HashRouter, Switch, Link, NavLink, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Vacancies from "./components/Vacancies";
import Pricing from "./components/Pricing";
import Clients from "./components/Clients";
import Blogs from "./components/Blogs";
import NotFound from "./components/NotFound";
import Contacts from "./components/Contacts";
import GoTop from "./components/GoTop";
import Footer from "./components/Footer";

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

class App extends Component {
	render() {
		return (
			<Router basename="/interior">
				<div className="App">
					<Header />
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/interior' exact component={Home} />
							<Route path='/about' component={About}/>
							<Route path='/vacancies' component={Vacancies}/>
							<Route path='/pricing' component={Pricing}/>
							<Route path='/clients' component={Clients}/>
							<Route path='/blogs' component={Blogs}/>
							<Route path='/contacts' component={Contacts}/>
							<Route path='/notfound' component={NotFound}/>
						</Switch>
						<GoTop />
					<Footer />
				</div>				
			</Router>
		);
	}
}

export default App;
