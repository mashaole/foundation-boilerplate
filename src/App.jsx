import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';

function App() {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<div className="content">
					<Switch>
						<Route path="/" exact component={Home} ></Route>
						<Route path="/about" exact component={About} />
						<Route path="/shop" exact component={Shop} />
						<Route path="/contact" exact component={Contact} />
						<Route path="*" component={Home} />
					</Switch>
					{Footer()}
				</div>
			</Router>
		</div>
	);
}

export default App;
