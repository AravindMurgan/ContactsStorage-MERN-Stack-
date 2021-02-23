import React, { useContext, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../.././context/auth/authContext';

export const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);

	const { isAuthenticated, logout, user } = authContext;

    const onLogout = ()=>{
        logout();
    }

	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name} </li>
			<li>
				<a onClick={onLogout} href='#'>
					<i className='fas fa-sign-out-alt'></i>
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<Link to='/register'>Regitser</Link>
			<Link to='/login'>Login</Link>
		</Fragment>
	);

	return (
		<div className='navbar bg-primary'>
			<h3>
				<i className={icon}></i> {title}
			</h3>

			<ul>
				<li>
					{isAuthenticated ? authLinks : guestLinks}
				</li>
			</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
	title: 'Contact Manager',
	icon: 'fas fa-id-card-alt',
};
