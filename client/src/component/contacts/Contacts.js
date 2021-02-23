import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from '../contacts/ContactItem';

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts , filtered } = contactContext;

	return (
		<Fragment>
			{filtered !== null
				? filtered.map((contact)=> (<ContactItem key={contact._id} contacts={contact}/>))
			
				: contacts.map(contact => <ContactItem key={contact._id} contacts={contact}/>)
			
			}
			
		</Fragment>
	);
};

export default Contacts;
