import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { HiOutlineInbox } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { LuStickyNote } from "react-icons/lu";
import { MdOutlineOutbox } from "react-icons/md";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { FiArchive } from "react-icons/fi";


const MinNav = () => {
	return (
		<section className="p-2 border w-64 h-full flex flex-col text-gray-400 gap-6 bg-gray-50">
			<button className='flex w-full justify-center items-center bg-green-800 text-white rounded-md py-1'>
				<IoMdAdd />
				<span>New Email</span>
			</button>
			<div className='flex justify-between items-center px-2 rounded-md inbox hover:text-purple-900 hover:bg-purple-200'>
				<NavLink to="/inbox" className="flex gap-2 items-center rounded-md p-2 hover:bg-purple-200">
					<HiOutlineInbox className='icon-style'/>
					<span>Inbox</span>
				</NavLink>
				<span className="px-1 text-xxs bg-gray-200 rounded-full notification-badge font-bold">33</span>
			</div>
			<div className='flex justify-between items-center p-2 rounded-md hover:text-purple-900 hover:bg-purple-200 inbox'>
				<NavLink to="/inbox/drafts" className="flex gap-2 items-center rounded-md p-2 hover:text-purple-900 hover:bg-purple-200">
					<LuStickyNote className='icon-style'/>
					<span>Drafts</span>
				</NavLink>
				<span className="px-1 text-xxs bg-gray-200 rounded-full notification-badge font-bold">2</span>
			</div>
			<div className='flex justify-between items-center p-2 rounded-md hover:text-purple-900 hover:bg-purple-200'>
				<NavLink to="/inbox/outbox" className="flex gap-2 items-center rounded-md p-2 hover:text-purple-900 hover:bg-purple-200">
					<MdOutlineOutbox className='icon-style'/>
					<span>Outbox</span>
				</NavLink>
			</div>
			<div className='flex justify-between items-center p-2 rounded-md hover:text-purple-900 hover:bg-purple-200'>
				<NavLink to="/inbox/sent" className="flex gap-2 items-center rounded-md p-2 hover:text-purple-900 hover:bg-purple-200">
					<PiPaperPlaneTilt className='icon-style'/>
					<span>Sent</span>
				</NavLink>
			</div>
			<div className='flex justify-between items-center p-2 rounded-md hover:text-purple-900 hover:bg-purple-200'>
				<NavLink to="/inbox/archive" className="flex gap-2 items-center rounded-md p-2 hover:text-purple-900 hover:bg-purple-200">
					<FiArchive className='icon-style'/>
					<span>Archive</span>
				</NavLink>
			</div>	
		</section>
	);
};

export default MinNav;
