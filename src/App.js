import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MinNav from './components/MinNav';
import DashboardMain from './components/DashboardMain';
import { PiGraduationCapLight } from "react-icons/pi";


const App = () => {
	return (
		<div className="h-screen overflow-hidden relative">
			<Header />
			<Sidebar />
			<main className="flex mt-14 ml-12 h-full">
				<MinNav />
				<DashboardMain />
			</main>
			<div className='absolute bottom-5 right-5 p-4 bg-purple-900 text-white rounded-full'>
				<PiGraduationCapLight className='icon-style'/>
			</div>
		</div>
	);
};

export default App;
