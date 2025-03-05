import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";
import { RiListView, RiInbox2Fill, RiSmartphoneFill } from "react-icons/ri";
import { IoMdAdd, IoMdArrowDropdown, IoIosArrowBack, IoIosArrowForward, IoIosChatboxes } from "react-icons/io";
import { MdOutlineCheckBox } from "react-icons/md";
import { PiTimerBold, PiPhoneCallFill } from "react-icons/pi";
import { ImFlag } from "react-icons/im";
import { HiBars3BottomLeft } from "react-icons/hi2";




const Activity = () => {
	return (
		<main className="flex flex-col mt-14 ml-12 h-full bg-white">
			<aside className="flex justify-between items-center px-3 py-4 w-full h-12 border">
				<div className="flex gap-2 items-center">
					<div className="flex border border-gray-400 py-1 px-3 rounded-md text-lg gap-4 items-center">
						<RxHamburgerMenu className='border-r border-r-gray-200'/>
						<BiSolidCalendarEvent />
					</div>
					<div className="bg-green-800 flex rounded-md justify-center gap-1 px-1 text-white items-center border border-white font-bold">
						<div className='px-1 flex gap-1.5 items-center border-r justify-center border-gray-50'>
							<IoMdAdd />
							<span>Activity</span>
						</div>
						<div className=''>
							<IoMdArrowDropdown />
						</div>
					</div>
					<div className='flex items-center gap-1 border px-1 rounded-md'>
						<TbCalendarTime />
						<span>Meeting scheduler</span>
						<IoMdArrowDropdown />
					</div>
				</div>
				<div className='flex gap-1 items-center'>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<span>Mar 24 - 30, 2024</span>
						<IoMdArrowDropdown />
					</div>
					<div className="flex items-center gap-3 px-2.5 bg-white rounded border border-gray-400">
						<IoIosArrowBack />
						<span>Today</span>
						<IoIosArrowForward />
					</div>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<HiBars3BottomLeft />
						<span>Bryan Brewer</span>
						<IoMdArrowDropdown />
					</div>
				</div>
			</aside>
			<div className="w-full h-full">
				<aside className="flex justify-start text-xs mt-2 items-center px-3 py-4 gap-2">
					<span>All</span>
					<hr />
					<div className='flex gap-1 text-purple-800'>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<PiPhoneCallFill />
							<span>Call</span>
						</div>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<IoIosChatboxes />
							<span>SMS</span>
						</div>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<RiListView />
							<span>Illustration</span>
						</div>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<MdOutlineCheckBox />
							<span>Confirmed Appointment</span>
						</div>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<PiTimerBold />
							<span>Tasks</span>
						</div>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<RiInbox2Fill />
							<span>Email</span>
						</div>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<ImFlag />
							<span>Requirements</span>
						</div>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<RiSmartphoneFill />
							<span>JustCall SMS</span>
						</div>
					</div>
				</aside>
				{/* Calendar of event */}
			</div>
		</main>
	)
};

export default Activity;

