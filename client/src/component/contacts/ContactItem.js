import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contacts }) => {
	const contactContext = useContext(ContactContext);
	const { deleteContact } = contactContext;
	const onDelete = () => {
		deleteContact(id)
	};

	const { id, name, email, phone, type } = contacts;

	return (
		<div className='card bg-light' style={{ borderRadius: '5px' }}>
			<h3 className='text-primary text-left'>
				{name}
				{'  '}
				<span
					className={
						'badge ' +
						(type === 'professional' ? 'badge-success' : 'badge-primary')
					}
					style={{ float: 'right' }}
				>
					{type}
				</span>
			</h3>
			<ul className='list'>
				{email && (
					<li>
						<i className='fas fa-envelope-open'></i> {email}
					</li>
				)}

				{phone && (
					<li>
						<i className='fas fa-phone'></i> {phone}
					</li>
				)}
			</ul>
			<button className='btn btn-dark btn-sm' style={{ marginTop: '10px' }}>
				Edit
			</button>
			<button className='btn btn-danger btn-sm' onClick={onDelete}>
				Delete
			</button>
		</div>
	);
};

ContactItem.propTypes = {
	contacts: PropTypes.object.isRequired,
};

export default ContactItem;
