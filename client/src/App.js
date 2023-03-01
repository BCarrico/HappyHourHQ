import React, {useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { RequireAuth } from './auth/RequireAuth';
import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AddHappyHour from './pages/AddHappyHour';
import Feed from './pages/Feed';
import HHPost from './pages/HHPost'
import Home2 from './pages/Home2'
import SignIn2 from './pages/SignIn2';
import SignUp2 from './pages/SignUp2'




const App = () => {
	
	const location = useLocation();
  
	useEffect(() => {
	  AOS.init({
		once: true,
		disable: 'phone',
		duration: 700,
		easing: 'ease-out-cubic',
	  });
	});
  
	useEffect(() => {
	  document.querySelector('html').style.scrollBehavior = 'auto'
	  window.scroll({ top: 0 })
	  document.querySelector('html').style.scrollBehavior = ''
	}, [location.pathname]); // triggered on route change
  
	return (
	  <>
		<Routes>
		<Route path='/' element={<Home2 />} />
			<Route
				path='/Home2'
				element={
					<RequireAuth>
						<Home2 />
					</RequireAuth>
				}
			/>
			<Route
				path='/signup'
				element={
					<SignUp2 />
				}
			/>
			<Route
				path='/login'
				element={
					<Login />
				}
			/>
			<Route
				path='/signin'
				element={
					<SignIn2 />
				}
			/>
			<Route
				path='/addHappyHour'
				element={
					<AddHappyHour />
				}
			/>
			<Route
				path='/feed'
				element={
					<Feed />
				}
			/>
			<Route
				path='HHPost/:id'
				element={
					<HHPost />
				}
			/>
			<Route path='*' element={<NoMatch />} />
		</Routes>
	  </>
	);
  }

	// return (
	// 	<Routes>
	// 		<Route path='/' element={<Home2 />} />
	// 		<Route
	// 			path='/Home2'
	// 			element={
	// 				<RequireAuth>
	// 					<Home2 />
	// 				</RequireAuth>
	// 			}
	// 		/>
	// 		<Route
	// 			path='/signup'
	// 			element={
	// 				<SignUp />
	// 			}
	// 		/>
	// 		<Route
	// 			path='/login'
	// 			element={
	// 				<Login />
	// 			}
	// 		/>
	// 		<Route
	// 			path='/addHappyHour'
	// 			element={
	// 				<AddHappyHour />
	// 			}
	// 		/>
	// 		<Route
	// 			path='/feed'
	// 			element={
	// 				<Feed />
	// 			}
	// 		/>
	// 		<Route
	// 			path='HHPost/:id'
	// 			element={
	// 				<HHPost />
	// 			}
	// 		/>
	// 		<Route path='*' element={<NoMatch />} />
	// 	</Routes>
	// );
// };

export default App;
