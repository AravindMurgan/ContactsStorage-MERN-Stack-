import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';

import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
} from '../type';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Aravind',
				email: 'arvind@gmail.com',
				phone: '5454566566',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Ram',
				email: 'Ram@gmail.com',
				phone: '123456789',
				type: 'personal',
			},
			{
				id: 3,
				name: 'Jill Juk',
				email: 'Jill@gmail.com',
				phone: '789456123',
				type: 'professional',
			},
			{
				id: 4,
				name: 'Gandhi',
				email: 'Gandhi@gmail.com',
				phone: '784512963',
				type: 'professional',
			},
		],
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);

	// Add contact//
    const addContact = (contact)=>{
        contact.id = uuidv4();
        dispatch({type:ADD_CONTACT , payload:contact })  
    }
    
	//Delete contact//

	//set current contact//

	//clear current contact//

	//update contact//

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
                addContact
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
