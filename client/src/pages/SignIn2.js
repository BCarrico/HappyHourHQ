import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import axios from 'axios';

import Header from '../components/Header';
import Banner from '../components/partials/Banner';
import Footer from '../components/Footer'

function SignIn() {
  let navigate = useNavigate();
  const { handleLogin } = useAuth();

	const [msg, setMsg] = React.useState({
		text: '',
		success: false,
	});

	const [loginData, setLoginData] = React.useState({
		email: '',
		password: '',
	});

	function handleFormChange(event) {
		const { name, value, type, checked } = event.target;
		setLoginData(prevloginData => ({
			...prevloginData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	}

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			const response = await axios({
				method: 'POST',
				data: {
					email: loginData.email,
					password: loginData.password,
				},
				url: '/login',
				withCredentials: true,
			});
			console.log('From Server:', response.data.user);
			setMsg({
				text: response.data.message.msgBody,
				success: true,
			});
			handleLogin(response.data.user);
			setTimeout(() => navigate('/dashboard'), 1500)
		} catch (err) {
			console.log(err);
			setMsg({
				text: err.response.data.message.msgBody,
				success: false,
			});
		}
	};


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl sm:w-2/5 mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome back. We exist to make entrepreneurism easier.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto md:w-1/4">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input 
                        name="email" 
                        type="email" 
                        className="form-input w-full text-gray-800" 
                        placeholder="Enter your email address"
                        onChange={handleFormChange} 
                        required 
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                        {/* Insert forgot password link below */}
                        {/* <Link to="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</Link> */}
                      </div>
                      <input 
                        name="password" 
                        type="password" 
                        className="form-input w-full text-gray-800" 
                        placeholder="Enter your password"
                        onChange={handleFormChange} 
                        required 
                      />
                    <div className={msg.success ? 'text-green-400 text-center font-semibold -mb-2 mt-2': 'text-red-400 font-semibold text-center -mb-2 mt-2'}>
								      {msg ? msg.text : ''}
							      </div>
                    </div>
                    
                  </div>
                  {/* To save state that user is logged in */}
                  {/* <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-600 ml-2">Keep me signed in</span>
                        </label>
                      </div>
                    </div>
                  </div> */}
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-black bg-sky-400 hover:bg-sky-700 w-full">Sign in</button>
                    </div>
                  </div>
                </form>
                {/* OR between signup / auth signup */}


                {/* <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div> */}


                {/* GOOGLE / GITHUB Auth */}


                {/* <form>
                  <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Continue with GitHub</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Continue with Google</span>
                      </button>
                    </div>
                  </div>
                </form> */}
                <div className="text-gray-600 text-center mt-6">
                  Don’t you have an account? <Link to="/signup" className="text-blue-600 hover:underline hover:text-sky-800 transition duration-150 ease-in-out">Sign up</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>


      <Footer />
    </div>
  );
}

export default SignIn;