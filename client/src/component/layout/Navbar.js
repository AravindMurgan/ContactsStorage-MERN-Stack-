import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const Navbar = ({title,icon}) => {
    return (
        <div className="navbar bg-primary">
            <h3>
                <i className={icon}></i>  {title}
            </h3>

            <ul>
                <li>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/register">Regitser</Link>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title:'Contact Manager',
    icon: 'fas fa-id-card-alt'
}
