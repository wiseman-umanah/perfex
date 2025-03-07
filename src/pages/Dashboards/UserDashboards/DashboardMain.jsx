import React from 'react';
import { BiSolidCalendarEvent } from "react-icons/bi";
import { TiUserOutline } from "react-icons/ti";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import Activities from './Activities';
import DealLost from './DealLost';
import Deals from './Deals';
import DealsWon from './DealsWon';
import Progress from './DealProgress';
import { PiCurrencyCircleDollarLight } from "react-icons/pi";


const DashboardMain = () => {  
	return (
		<section className="bg-gray-200 flex flex-col p-2.5 w-full h-full overflow-auto">
			<aside className="flex justify-between items-center h-12 border">
				<div className='font-bold'>
					My Dashboard
				</div>
				<div className="flex">
					<div className="flex gap-2.5">
						<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
							<BiSolidCalendarEvent />
							<span>Period</span>
							<IoMdArrowDropdown />
						</div>
						<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
							<TiUserOutline />
							<span>User</span>
							<IoMdArrowDropdown  />
						</div>
					</div>
					<hr className="border-gray-400 mx-2.5" />
					<div className="flex gap-2.5">
						<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
							<IoShareSocialOutline  />
							<span>Share</span>
						</div>
						<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
							<span>Export</span>
							<IoMdArrowDropdown  />
						</div>
						<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
							<MdMoreHoriz />
						</div>
					</div>
				</div>
			</aside>
			<div className="flex gap-2.5 h-full mt-6">
				{/* Card Tile 1 */}
				<div className="flex flex-col gap-2.5 w-full border">
					<div className="p-1 w-full h-1/3 bg-gray-50 flex flex-col">
						<div className='flex flex-col border-b gap-1 border-b-gray-400'>
							<div className='flex gap-1 items-center'>
								<PiCurrencyCircleDollarLight />
								<span className='font-semibold'>Deals won over time</span>
							</div>
							<div className='text-xs text-gray-400'>
								THIS YEAR . WON
							</div>
						</div>
						<DealsWon />
					</div>
					<div className=" flex gap-2.5">
						<div className="p-2 w-1/2 h-64 bg-gray-50 flex flex-col">
							<div className='flex flex-col border-b gap-1 border-b-gray-400'>
								<div className='flex gap-1 items-center'>
									<BiSolidCalendarEvent />
									<span className='font-semibold'>Activities completed and planned</span>
								</div>
								<div className='text-xs text-gray-400'>
									THIS MONTH
								</div>
							</div>
							<Activities />
						</div>
						<div className="p-2 w-1/2 h-64 bg-gray-50 flex flex-col">
							<div className='flex flex-col border-b gap-1 border-b-gray-400'>
								<div className='flex gap-1 items-center'>
									<PiCurrencyCircleDollarLight />
									<span className='font-semibold'>Deals lost by reasons</span>
								</div>
								<div className='text-xs text-gray-400'>
									LOST  . THIS YEAR
								</div>
							</div>
							<DealLost />
						</div>
					</div>
				</div>

				{/* Card Tile 2 */}
				<div className="flex flex-col gap-2.5 w-full border ">
					<div className="p-2 w-full h-1/3 bg-gray-50 flex flex-col">
						<div className='flex flex-col border-b gap-1 border-b-gray-400'>
							<div className='flex gap-1 items-center'>
								<PiCurrencyCircleDollarLight />
								<span className='font-semibold'>Deal conversion</span>
							</div>
							<div className='text-xs text-gray-400'>
								CLIENTS . THIS YEAR . WON, LOST
							</div>
							<div className='font-bold py-1 border-t border-t-gray-400'>
								Win rate is 80%
							</div>
						</div>
						<Deals />
					</div>
					<div className=" flex gap-2.5">
						<div className="p-2 w-1/2 h-64 bg-gray-50 flex flex-col">
							<div className='flex flex-col border-b gap-1 border-b-gray-400'>
								<div className='flex gap-1 items-center'>
									<PiCurrencyCircleDollarLight />
									<span className='font-semibold'>Activities value of won deals</span>
								</div>
								<div className='text-xs text-gray-400'>
									THIS YEAR . WON
								</div>
							</div>
							<div className='h-full w-full flex flex-col items-center justify-center'>
								<span className='text-3xl font-bold'>$1,313</span>
								<span>Average deal value</span>
							</div>
						</div>
						<div className="p-2 w-1/2 h-64 bg-gray-50 flex flex-col">
							<div className='flex flex-col border-b gap-1 border-b-gray-400'>
								<div className='flex gap-1 items-center'>
									<PiCurrencyCircleDollarLight />
									<span className='font-semibold'>Activities value of won deals</span>
								</div>
								<div className='text-xs text-gray-400'>
									THIS YEAR . CLIENTS . WON, LOST
								</div>
							</div>
							<div className='h-full w-full flex flex-col items-center justify-center'>
								<span className='text-3xl font-bold'>0 days, 6 hours</span>
								<span>Average duration (days)</span>
							</div>
						</div>
					</div>
					<div className=" w-full h-64 bg-gray-50">
						<Progress />
					</div>
					<div className="p-2 w-full  bg-gray-50 flex flex-col">
						<div className='flex flex-col border-b gap-1 border-b-gray-400'>
							<div className='flex gap-1 items-center'>
								<PiCurrencyCircleDollarLight />
								<span className='font-semibold'>Revenue Forecast</span>
							</div>
							<div className='text-xs text-gray-400'>
								THIS YEAR . CLIENTS . WON, LOST
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DashboardMain;
