import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import axios from 'axios';
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
		contacts: [],
		current: null,
		filtered:null
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);

	//Get Contacts//
	const getContacts = async ()=>{

		try {
			const res = await axios.get('/api/contacts');

			dispatch({ type: GET_CONTACTS, payload: res.data });

		} catch (error) {
			
			dispatch({type: CONTACT_ERROR , payload: error.res.message})
		}
	}


	// Add contact//
	const addContact =async (contact) => {

		const config = {
			headers: {
				'Content-Type' : 'application/json'
			}
		}

		try {
			const res = await axios.post('/api/contacts',contact,config);
			console.log(res);

			dispatch({ type: ADD_CONTACT, payload: res.data });

		} catch (error) {
			
			dispatch({type: CONTACT_ERROR , payload: error.res.message})
		}

		

		
	};

	//Delete contact//
	const deleteContact = (id) => dispatch({ type: DELETE_CONTACT, payload: id });

	//set current contact//
	const setCurrent = (contact) =>
		dispatch({ type: SET_CURRENT, payload: contact });

	//clear current contact//
	const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

	//update contact//
	const updateContact = (contact) => dispatch({type : UPDATE_CONTACT, payload: contact})

	//Filter Contact//
	const filterContacts = (text)=> dispatch({type: FILTER_CONTACTS,payload:text})

	///Clear Filter//
	const clearFilter = () => dispatch({ type: CLEAR_FILTER });

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current:state.current,
				filtered:state.filtered,
				error:state.error,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter,
				getContacts
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
