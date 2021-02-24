import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
	
	const contactContext = useContext(ContactContext);
	const { deleteContact,setCurrent } = contactContext;
	const onDelete = () => {
		deleteContact(_id)
	};

	const { _id, name, email, phone, type } = contact;
	
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
						<i  className='fas fa-envelope-open'/> {email}
					</li>
				)}

				{phone && (
					<li>
						< i className='fas fa-phone'/> {phone}
					</li>
				)}
			</ul>
			<button className='btn btn-dark btn-sm' style={{ marginTop: '10px' }} onClick={()=> setCurrent(contact) } >
				Edit
			</button>
			<button className='btn btn-danger btn-sm' onClick={onDelete}>
				Delete
			</button>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
