import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import ContactItem from '../../component/contacts/ContactItem'

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
		current: null,
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);

	// Add contact//
	const addContact = (contact) => {
		contact.id = uuidv4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	//Delete contact//
	const deleteContact = (id) => dispatch({ type: DELETE_CONTACT, payload: id });

	//set current contact//
	const setCurrent = (contact) =>
		dispatch({ type: SET_CURRENT, payload: contact });

	//clear current contact//
	const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });
	//update contact//

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current:state.current,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
