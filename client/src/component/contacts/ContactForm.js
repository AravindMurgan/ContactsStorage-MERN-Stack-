import React, { useState } from 'react';

const ContactForm = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	const { name, email, phone, type } = contact;
	return (
		<div>
			<form>
				<h2 className='text-primary'>Add Contact</h2>
				<input
					type='text'
					value={name}
					name='name'
					placeholder='name'
					onChange={onChange}
				/>

				<input
					type='text'
					value={name}
					name='name'
					placeholder='name'
					onChange={onChange}
				/>
			</form>
		</div>
	);
};

export default ContactForm;
