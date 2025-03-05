import React from 'react';
import { Outlet } from 'react-router-dom';
import MinNav from './UserDashboards/MinNav';

const Dashboard = () => {
	return (
		<main className="flex mt-14 ml-12 h-full">
			<MinNav />
			<Outlet />
		</main>
	)
};

export default Dashboard;

