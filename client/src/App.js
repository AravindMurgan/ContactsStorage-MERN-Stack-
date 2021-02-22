import React, { Fragment } from 'react';
import { Navbar } from './component/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './component/pages/About';
import Register from './component/auth/Regitser';
import Login from './component/auth/Login';
import Alert from './component/layout/Alert';
import Home from './component/pages/Home';
import './App.css';

import ContactState from './context/contact/contactState';
import AuthState from './context/auth/authState';
import AlertState from './context/alert/AlertState';

function App() {
	return (
		<AuthState>
			<ContactState>
			<AlertState>
				<Router>
					<Fragment>
						<Navbar />
						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/register' component={Register} />
								<Route exact path='/login' component={Login} />
							</Switch>
						</div>
					</Fragment>
				</Router>
			</AlertState>
			</ContactState>
		</AuthState>
	);
}

export default App;
