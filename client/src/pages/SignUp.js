import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


function SignUp() {
	let navigate = useNavigate();
	

	const [msg, setMsg] = React.useState({
		text: '',
		success: false,
	});

	const [signUpData, setSignUpData] = React.useState({
		userName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	function handleFormChange(event) {
		const { name, value, type, checked } = event.target;
		setSignUpData(prevSignUpData => ({
			...prevSignUpData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	}

	const handleSubmit = async event => {
		event.preventDefault();
		console.log(signUpData, 'Sign Up Attempt Sent');
		try {
			const response = await axios({
				method: 'POST',
				data: {
					userName: signUpData.userName,
					email: signUpData.email,
					password: signUpData.password,
					confirmPassword: signUpData.confirmPassword,
					
				},
				url: '/signup',
				withCredentials: true,
			});
			console.log('From Server:', response);
			setMsg({
				text: response.data.message.msgBody,
				success: true,
			});
			
			setTimeout(() => navigate('/login'), 1500)
		} catch (err) {
			setMsg({
				text: err.response.data.message.msgBody,
				success: false,
			});
			console.log(err.response);
		}
	};

	return (
		<div className='flex flex-col min-h-screen bg-gray-800 md:bg-gray-200'>
			<Header />
			<div className='flex-grow'>
				<section className='flex flex-col items-center p-10'>
					<div className='rounded-2xl w-96 shadow-xl bg-gray-800'>
						<div className='flex flex-col p-8 space-y-2'>
							<h1 className='card-title self-center mb-4 text-white'>SignUp</h1>
							<form onSubmit={handleSubmit} className='flex flex-col gap-2'>
								<input
									type='text'
									name='userName'
									placeholder='User Name'
									onChange={handleFormChange}
									className='input input-bordered w-full max-w-xs'
								/>
								<input
									type='text'
									name='email'
									placeholder='Email'
									onChange={handleFormChange}
									className='input input-bordered w-full max-w-xs'
								/>
								<input
									type='password'
									name='password'
									placeholder='Password'
									onChange={handleFormChange}
									className='input input-bordered w-full max-w-xs'
								/>
								<input
									type='password'
									name='confirmPassword'
									placeholder='Confirm Password'
									onChange={handleFormChange}
									className='input input-bordered w-full max-w-xs'
								/>
								<div className='card-actions justify-center mt-4'>
									<button className='flex w-full items-center justify-center bg-green-400 px-4 py-2 w-2/5 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300'>Create User</button>
								</div>
							</form>
							<div
								className={
									msg.success
										? 'text-sky-400 text-center'
										: 'text-warning text-center'
								}
							>
								{msg ? msg.text : ''}
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default SignUp;
