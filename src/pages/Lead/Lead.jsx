import React from 'react';
import { Outlet } from 'react-router-dom';
import MinNav from './LeadInbox/MinNav';

const Lead = () => {
	return (
		<main className="flex mt-14 ml-12 h-full">
			<MinNav />
			<Outlet />
		</main>
	)
};

export default Lead;

