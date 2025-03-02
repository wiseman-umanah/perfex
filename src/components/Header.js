import React from 'react';
import { IoInvertModeOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch, IoMdAdd } from "react-icons/io";

const Header = () => {
	return (
		<header className="fixed top-0 left-12 right-0 h-14 border-b flex justify-between items-center px-8 bg-gray-50">
			<div className="left-section">
				Insights
			</div>
			<div className="flex gap-5">
				<div className="flex items-center border rounded-full px-3 w-72">
					<IoIosSearch className="icon-style mr-1"/>
					<input type="text" placeholder="Search" className="border-none bg-transparent w-full h-full focus:outline-none" />
				</div>
				<div className="border rounded-full w-8 h-8 flex justify-center items-center">
					<IoMdAdd className="icon-style" />
				</div>
			</div>
			<div className="flex gap-5 text-xl items-center">
				<div className="flex gap-5 border p-2 rounded-full">
					<IoInvertModeOutline className="icon-style" />
					<IoExtensionPuzzleOutline className="icon-style" />
				</div>
				<div>
					<GoQuestion className="icon-style" />
				</div>
				<div className="relative">
					<PiLightbulbFilamentFill className="icon-style" />
					<div className="text-xs bg-red-700 text-white px-2 py-1 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
						1+
					</div>
				</div>
				<div>
					<FaUserCircle className="icon-style" />
				</div>
			</div>
		</header>
	);
};

export default Header;
