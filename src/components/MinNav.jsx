import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { MdOutlineSpaceDashboard, MdMoreHoriz } from "react-icons/md";
import { BiSolidCalendarEvent } from "react-icons/bi";

const MinNav = () => {
	return (
		<section className="p-4 border w-64 h-full bg-gray-50">
			<div className="flex justify-between mb-5">
				<div className="flex gap-2">
					<div className="flex items-center border rounded-md px-3 border-gray-400">
						<IoIosSearch className="icon-style mr-1"/>
						<input type="text" placeholder="Search" className="border-none bg-transparent w-full h-full focus:outline-none" />
					</div>
					<div className="rounded-md w-7 h-7 flex justify-center items-center bg-green-800">
						<IoMdAdd className="icon-style text-xs text-white p-1" />
					</div>
				</div>
			</div>
			<div>
				<details>
					<summary className='flex items-center font-bold justify-between list-none'>
						<div className='flex items-center'>
							<span>Dashboard</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down" className="fill-black w-7 h-7">
								<path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
							</svg>
						</div>
						<div>
							<MdMoreHoriz />
						</div>
					</summary>
					<ul className="list-none mb-3">
						<li className='mb-3'>
							<details>
								<summary className='flex items-center list-none mt-3 mb-3 text-gray-400'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down" className="fill-gray-400 w-7 h-7">
										<path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
									</svg>
									<span>My dashboards</span>
								</summary>
								<ul className="list-none mb-3 ml-3">
									<li className='mb-3'>
										<Link to="/my-dashboard" className='flex gap-1 items-center'>
											<MdOutlineSpaceDashboard />
											<span className='truncate'>My dashboard</span>
										</Link>
									</li>
								</ul>	
							</details>
						</li>
					</ul>
				</details>
				<details>
					<summary className='flex items-center font-bold justify-between list-none mt-3 mb-3'>
						<div className='flex items-center'>
							<span>Goals</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down" className="fill-black w-7 h-7">
								<path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
							</svg>
						</div>
						<div>
							<MdMoreHoriz />
						</div>
					</summary>
					<ul className="list-none mb-3 ml-3 text-gray-400">
						<li className='mb-3'>No goals</li>
					</ul>
				</details>
				<details>
					<summary className='flex items-center font-bold justify-between list-none mt-3 mb-3'>
						<div className='flex items-center'>
							<span>Reports</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down" className="fill-black w-7 h-7">
								<path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
							</svg>
						</div>
						<div>
							<MdMoreHoriz />
						</div>
					</summary>
					<ul className="list-none mb-3">
						<details>
							<summary className='flex items-center list-none mt-3 mb-3 text-gray-400'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down" className="fill-gray-400 w-7 h-7">
									<path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
								</svg>
								<span>My reports</span>								
							</summary>
							<ul className="list-none ml-3 text-gray-400">
								<li>
									<Link to="/reports/my-reports/deals-conversion" className='mb-3 flex gap-2 items-center'>
										<PiCurrencyCircleDollarLight />
										<span className='truncate'>Deal conversion</span>
									</Link>
								</li>
								<li className='mb-3 flex gap-2 items-center'>
									<PiCurrencyCircleDollarLight />
									<span className='truncate'>Deal progress</span>
								</li>
								<li className='mb-3 flex gap-2 items-center'>
									<PiCurrencyCircleDollarLight />
									<span className='truncate'>Deals won over time</span>
								</li>
								<li className='mb-3 flex gap-2 items-center'>
									<PiCurrencyCircleDollarLight />
									<span className='truncate w-full'>Average value of won deals</span>
								</li>
								<li className='mb-3 flex gap-2 items-center'>
									<PiCurrencyCircleDollarLight />
									<span className='truncate'>Deal duration</span>
								</li>
								<li className='mb-3 flex gap-2 items-center'>
									<BiSolidCalendarEvent />
									<span className='truncate'>Activities completed</span>
								</li>
								<li className='mb-3 flex gap-2 items-center'>
									<PiCurrencyCircleDollarLight />
									<span className='truncate'>Deals lost by reasons</span>
								</li>
								<li className='mb-3 flex gap-2 items-center'>
									<PiCurrencyCircleDollarLight />
									<span className='truncate'>Revenue forecast</span>
								</li>
							</ul>
						</details>
					</ul>
				</details>
			</div>
		</section>
	);
};

export default MinNav;
