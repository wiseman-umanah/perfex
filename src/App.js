import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MinNav from './components/MinNav';
import DashboardMain from './pages/Dashboards/UserDashboards/DashboardMain';
import DealsConversion from './pages/Reports/UserReports/DealsConversion';
import { PiGraduationCapLight } from "react-icons/pi";


const App = () => {
	return (
		<Router>
			<div className="h-screen overflow-hidden relative">
				<Header />
				<Sidebar />
				<main className="flex mt-14 ml-12 h-full">
					<MinNav />
					<Routes>
						<Route path="/my-dashboard" element={<DashboardMain />} />
						<Route path="/reports/my-reports/deals-conversion" element={<DealsConversion />} />
					</Routes>
				</main>
				<div className='absolute bottom-5 right-5 p-4 bg-purple-900 text-white rounded-full'>
					<PiGraduationCapLight className='icon-style'/>
				</div>
			</div>
		</Router>
	);
};

export default App;
