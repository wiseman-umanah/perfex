import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MinNav from './components/MinNav';
import DashboardMain from './components/DashboardMain';


const App = () => {
	return (
			<div className="h-screen overflow-hidden">
			<Header />
			<Sidebar />
			<main className="flex mt-8 ml-12 h-full">
				<MinNav />
				<DashboardMain />
			</main>
		</div>
	);
};

export default App;
