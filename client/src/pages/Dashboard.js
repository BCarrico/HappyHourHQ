import React from 'react';
import useAuth from '../auth/useAuth';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import DashboardText from '../components/DashboardText';



function Dashboard() {
	const { user } = useAuth();

	return (
		<div>
			<Header />
			<DashboardText />
			<div className='flex flex-col p-10 items-center gap-5'>
				<h2>This is the Dashboard page. (Private)</h2>
				<div className='flex flex-col'>
					<span>Logged in as {user.userName}</span>
					<span>ID: {user._id}</span>
					
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
