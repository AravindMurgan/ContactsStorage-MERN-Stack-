import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from '../contacts/ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts , filtered ,getContacts,loading} = contactContext;

	useEffect(()=>{
		getContacts();
		//eslint-disable-next-line
	},[]);

	return (
		<Fragment>
			{contacts !== null && !loading ? (
        <div>
          {filtered !== null
            ? filtered.map(contact => (
               
                  <ContactItem contact={contact} />
              ))
            : contacts.map(contact => (

                  <ContactItem contact={contact} />
              
              ))}
        </div>
      ) : (
        <Spinner />
      )}
		</Fragment>
	);
};

export default Contacts;
