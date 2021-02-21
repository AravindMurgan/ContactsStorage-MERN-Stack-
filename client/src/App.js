import React, { Fragment } from 'react';
import { Navbar } from './component/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './component/pages/About';
import Register from './component/auth/Regitser';
import Login from './component/auth/Login';
import Home from './component/pages/Home';
import './App.css';

import ContactState from './context/contact/contactState';
import AuthState from './context/auth/authState';

function App() {
	return (
		<AuthState>
			<ContactState>
				<Router>
					<Fragment>
						<Navbar />
						<div className='container'>
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/register' component={Register} />
								<Route exact path='/login' component={Login} />
							</Switch>
						</div>
					</Fragment>
				</Router>
			</ContactState>
		</AuthState>
	);
}

export default App;
