import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgInbox } from "react-icons/cg";
import { TbBrandWechat } from "react-icons/tb";
import { LuBotMessageSquare } from "react-icons/lu";
import { RiListView } from "react-icons/ri";
import { PiBinoculars, PiSpeedometer } from "react-icons/pi";
import { BiMessageRoundedDetail } from "react-icons/bi";

const MinNav = () => {
	return (
		<section className="p-2 border w-64 h-full flex flex-col text-gray-400 gap-6 bg-gray-50">
			<NavLink to="/lead/lead-inbox" className="flex gap-2 items-center rounded-md p-2 hover:text-purple-900 hover:bg-purple-200">
				<CgInbox className='icon-style'/>
				<span>Leads Inbox</span>
			</NavLink>
			<div className='flex flex-col gap-3'>
				<span className='font-bold'>LEADBOOSTER</span>
				<div className="flex gap-2 items-center p-2 rounded-md hover:text-purple-900 hover:bg-purple-200">
					<TbBrandWechat className='icon-style'/>
					<span>Live Chat</span>
				</div>
				<div className="flex gap-2 items-center p-2 rounded-md hover:text-purple-900 hover:bg-purple-200">
					<LuBotMessageSquare className='icon-style'/>
					<span>Chatbot</span>
				</div>
				<div className="flex gap-2 items-center p-2 rounded-md hover:text-purple-900 hover:bg-purple-200">
					<RiListView className='icon-style'/>
					<span>Web Forms</span>
				</div>
				<div className="flex gap-2 items-center p-2 rounded-md hover:text-purple-900 hover:bg-purple-200">
					<PiBinoculars className='icon-style'/>
					<span>Prospector</span>
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				<span className='font-bold'>ADD-ONS</span>
				<div className="flex gap-2 items-center p-2 rounded-md hover:text-purple-900 hover:bg-purple-200">
					<PiSpeedometer className='icon-style'/>
					<span>Web Visitor</span>
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				<span className='font-bold'>INTEGRATIONS</span>
				<div className='flex justify-between items-center p-2 rounded-md hover:text-purple-900 hover:bg-purple-200'>
					<div className="flex gap-2 items-center">
						<BiMessageRoundedDetail className='icon-style'/>
						<span>Messaging</span>
					</div>
					<span className="p-2 text-xs bg-purple-700 rounded-full font-bold text-white">BETA</span>
				</div>
			</div>
		</section>
	);
};

export default MinNav;
