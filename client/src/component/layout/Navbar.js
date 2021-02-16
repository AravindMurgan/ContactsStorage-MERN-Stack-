import React from 'react';
import PropTypes from 'prop-types';

export const Navbar = ({title,icon}) => {
    return (
        <div className="navbar bg-primary">
            <h3>
                <i className={icon}></i>  {title}
            </h3>
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
