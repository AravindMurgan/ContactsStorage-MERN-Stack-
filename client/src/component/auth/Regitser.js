import React, { useState } from 'react';

const Regitser = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('Register Submit');
	};
	return (
		<div>
			<div className='form-container'>
				<h1>
					Account <span className='text-primary'>Register</span>
				</h1>

				<form onSubmit={onSubmit}>
					<div className='form-groups'>
						<label htmlFor='name'>Name</label>
						<input type='text' name='name' value='name' onChange={onChange} />
					</div>

					<div className='form-groups'>
						<label htmlFor='email'>email</label>
						<input type='text' name='name' value='name' onChange={onChange} />
					</div>

					<div className='form-groups'>
						<label htmlFor='password'>Password</label>
						<input
							type='text'
							name='password'
							value='password'
							onChange={onChange}
						/>
					</div>

					<div className='form-groups'>
						<label htmlFor='password2'>Password-2</label>
						<input
							type='password'
							name='password2'
							value='password2'
							onChange={onChange}
						/>
					</div>

					<input
						type='submit'
						value='Regitser'
						className='btn btn-block btn-primary'
					/>
				</form>
			</div>
		</div>
	);
};

export default Regitser;
