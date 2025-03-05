import React from 'react';
import { Link } from 'react-router-dom';
import { BiCurrentLocation, BiSolidCalendarEvent } from "react-icons/bi";
import { PiLetterCirclePFill, PiCurrencyCircleDollarLight } from "react-icons/pi";
import { MdContacts, MdOutlineEmail, MdMoreHoriz } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiTaskFill } from "react-icons/ri";

const Sidebar = () => {
	return (
		<nav className="fixed top-0 left-0 w-12 h-full bg-purple-950 flex flex-col items-center text-white p-2">
			<div className="mb-5">
				<PiLetterCirclePFill className="icon-style" />
			</div>
			<ul className="list-none p-0 flex flex-col gap-8 items-center">
				<li>
					<Link to="/lead">
						<BiCurrentLocation className="icon-style" />
					</Link>
				</li>
				<li>
					<Link to="/deal">
						<PiCurrencyCircleDollarLight className="icon-style" />
					</Link>
				</li>
				<li>
					<Link to="/activity">
						<BiSolidCalendarEvent className="icon-style" />
					</Link>
				</li>
				<li>
					<a href="#">
						<MdContacts className="icon-style" />
					</a>
				</li>
				<li>
					<a href="#">
					<MdOutlineEmail className="icon-style" />
					</a>
				</li>
				<li>
					<Link to="/dashboard">
						<BsGraphUpArrow className="icon-style" />
					</Link>
				</li>
				<li>
					<a href="#">
						<RiTaskFill className="icon-style" />
					</a>
				</li>
				<li>
					<a href="#">
						<MdMoreHoriz className="icon-style" />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;

