import React from 'react';
import { MdMoreHoriz, MdLoop, MdOutlineMailOutline, MdOutlineStickyNote2 } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoMdAdd, IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";



const Timeline = () => {
	return (
		<section className="bg-white flex flex-col p-2.5 w-full h-full overflow-auto">
			<aside className="flex justify-between items-center px-3 w-full h-12 ">
				<div className="flex gap-2 items-center">
					<div className="flex border border-gray-400 py-1 px-3 rounded-md text-lg gap-4 items-center">
						<IoPerson className='border-r border-r-gray-200'/>
						<HiOutlineBuildingOffice2 />
					</div>
					<div className="bg-green-800 flex rounded-md justify-center gap-1 px-1 text-white items-center border border-white font-bold">
						<div className='px-1 flex gap-1.5 items-center border-r justify-center border-gray-50'>
							<IoMdAdd />
							<span>Person</span>
						</div>
						<div className=''>
							<IoMdArrowDropdown />
						</div>
					</div>
				</div>
				<div className='flex gap-1 text-xs'>
					<MdOutlineEdit />
					<span>140 people</span>
					<span>.</span>
					<MdLoop />
					<span>No frequency set</span>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						{/* calendar not solid */}
						<span>3 months back</span>
						<IoMdArrowDropdown />
					</div>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<HiBars3BottomLeft />
						<span>Everyone</span>
						<IoMdArrowDropdown />
					</div>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<MdMoreHoriz />
					</div>
				</div>
			</aside>
			<div className="w-full h-full">
				<aside className="flex justify-start text-xs mt-2 items-center px-3 py-4 gap-2">
					<span>All</span>

					<hr />

					<div className='flex gap-1 text-purple-800'>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<PiCurrencyCircleDollarLight />
							<span>Deals</span>
						</div>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<MdOutlineMailOutline />
							<span>Emails</span>
						</div>
						<div className='bg-purple-200 p-1 flex items-center rounded-md'>
							<MdOutlineStickyNote2 />
							<span>Notes</span>
						</div>
					</div>

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
		</section>
	)
};

export default Timeline;

