import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';
import ContactItem from '../../component/contacts/ContactItem';
import SetAuthToken from '../../utils/setAuthToken';

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../type';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	// Load User
	const loadUser = async () => {
		if(localStorage.token){
			SetAuthToken(localStorage.token)
		}
		try {
			const res = await axios.get('api/auth');

			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (error) {
			dispatch({type:AUTH_ERROR})
		}
	}
	// Regitser User
	const register = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/api/users', formData, config);

			dispatch({ type: REGISTER_SUCCESS, payload: res.data });

			//once user registers we take him to login and get him in//
			loadUser();
		} catch (err) {
			dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
		}
	};
	// Login User
	const loginUser = () => console.log('loginUser');
	//  Logout
	const logoutUser = async () => {console.log('loginUser')};

	// Clear Errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				loadUser,
				loginUser,
				logoutUser,
				clearErrors,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
