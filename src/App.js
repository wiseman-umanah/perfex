import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { PiGraduationCapLight } from "react-icons/pi";
import Dashboard from './pages/Dashboards/Dashboard';
import DashboardMain from './pages/Dashboards/UserDashboards/DashboardMain';
import DealsConversion from './pages/Dashboards/Reports/UserReports/DealsConversion';
import Lead from './pages/Lead/Lead';
import LeadsInbox from './pages/Lead/LeadInbox/LeadInbox';
import Deal from './pages/Deal/Deal';
import Activity from './pages/Activity/Activity';
import Contact from './pages/Contact/Contact';
import People from './pages/Contact/People/People';
import Timeline from './pages/Contact/Timeline/Timeline';
import Inbox from './pages/Inbox/Inbox';
import InboxMain from './pages/Inbox/InboxMain/InboxMain'; 


const App = () => {
	return (
		<Router>
			<div className="h-screen overflow-hidden relative">
				<Header />
				<Sidebar />
				<Routes>
					<Route path="/dashboard/*" element={<Dashboard />}>
						<Route path="my-dashboard" element={<DashboardMain />} />
						<Route path="reports/my-reports/deals-conversion" element={<DealsConversion />} />
					</Route>
					<Route path='/lead/*' element={<Lead />}>
						<Route path='lead-inbox' element={<LeadsInbox />} />
					</Route>
					<Route path='/deal' element={<Deal />} />
					<Route path='/activity' element={<Activity />} />
					<Route path='/contact/*' element={<Contact />}>
						<Route path='people' element={<People />} />
						{/* <Route path='organization' element={<Organization />} /> */}
						<Route path='contacts-timeline' element={<Timeline />} />
					</Route>
					<Route path='/inbox/*' element={<Inbox />}>
						<Route path='' element={<InboxMain />} />
					</Route>
				</Routes>
				<div className='absolute bottom-5 right-5 p-4 bg-purple-900 text-white rounded-full'>
					<PiGraduationCapLight className='icon-style'/>
				</div>
			</div>
		</Router>
	);
};

export default App;
