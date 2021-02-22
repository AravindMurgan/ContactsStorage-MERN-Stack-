import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Regitser = () => {
	const alertContext = useContext(AlertContext);
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { setAlert } = alertContext;

	const { name, email, password, password2 } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();

		if (name === '' || email === '' || password === '') {
			setAlert('Please enter all the fields', 'danger');
		} else if (password !== password2) {
			setAlert('Password does not match', 'danger');
		} else {
			console.log('Register Submit');
		}
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Register</span>
			</h1>

			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						value={name}
						onChange={onChange}
						required
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='email'>email</label>
					<input
						type='text'
						name='email'
						value={email}
						onChange={onChange}
						required
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
						required
						minLength='6'
						maxLength='12'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='password2'>Password-2</label>
					<input
						type='password'
						name='password2'
						value={password2}
						onChange={onChange}
						required
					/>
				</div>

				<input
					type='submit'
					value='Regitser'
					className='btn btn-block btn-primary'
				/>
			</form>
		</div>
	)
};

export default Regitser;
