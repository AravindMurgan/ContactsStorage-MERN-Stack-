import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	///Destructring
	const contactContext = useContext(ContactContext);
	const { addContact,clearCurrent,updateContact, current } = contactContext;

	///Edit State//
	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		}
	},[contactContext, current]);
	///ClearCurrent State///
	const clearAll = ()=>{
		clearCurrent();
	}

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	const { name, email, phone, type } = contact;

	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if(current === null){
			addContact(contact);
		}else{
			updateContact(contact)
		}
		
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		});
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<h2 className='text-primary'>{current === null ? 'Add Contact' : 'Edit Contact'}</h2>
				<input
					type='text'
					value={name}
					name='name'
					placeholder='Name'
					onChange={onChange}
				/>
				<input
					type='email'
					value={email}
					name='email'
					placeholder='Email'
					onChange={onChange}
				/>
				<input
					type='phone'
					value={phone}
					name='phone'
					placeholder='Phone'
					onChange={onChange}
				/>
				<h5>Contact Type</h5>
				<input
					type='radio'
					name='type'
					value='personal'
					checked={type === 'personal'}
					onChange={onChange}
				/>{' '}
				Personal{' '}
				<input
					type='radio'
					name='type'
					value='professional'
					checked={type === 'professional'}
					onChange={onChange}
				/>{' '}
				Professional{' '}
				<div>
					<input
						type='submit'
						value={current ? 'Update Contact' : 'Add Contact' }
						className='btn btn-block btn-primary'
						
					/>
				</div>
				{current &&
					<div>
					<button className="btn btn-block btn-light" onClick={clearAll}>Clear All</button>
					</div> }
			</form>
		</div>
	);
};

export default ContactForm;
