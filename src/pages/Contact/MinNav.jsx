import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiHeartPulseLine } from "react-icons/ri";

const MinNav = () => {
	return (
		<section className="p-2 border w-64 h-full flex flex-col text-gray-400 gap-6 bg-gray-50">
			<NavLink to="/contact/people" className="flex gap-2 items-center rounded-md p-2 hover:text-purple-900 hover:bg-purple-200">
				<IoPerson className='icon-style'/>
				<span>People</span>
			</NavLink>
			<NavLink to="#" className="flex gap-2 items-center rounded-md p-2 hover:text-purple-900 hover:bg-purple-200">
				<HiOutlineBuildingOffice2 className='icon-style'/>
				<span>Organizations</span>
			</NavLink>
			<NavLink to="#" className="flex gap-2 items-center rounded-md p-2 hover:text-purple-900 hover:bg-purple-200">
				<RiHeartPulseLine className='icon-style'/>
				<span>Contacts timeline</span>
			</NavLink>			
		</section>
	);
};

export default MinNav;
