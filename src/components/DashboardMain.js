import React from 'react';
import { BiSolidCalendarEvent } from "react-icons/bi";
import { TiUserOutline } from "react-icons/ti";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";

const DashboardMain = () => {
	return (
		<section className="bg-gray-200 flex flex-col p-2.5 w-[calc(100%-250px)] h-full">
			<aside className="flex justify-between items-center h-12 border">
				<div>My Dashboard</div>
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
				<div className="card-tile flex flex-col gap-2.5 w-full border">
					<div className=" w-full h-48 bg-gray-50 "></div>
					<div className=" flex gap-2.5">
						<div className="small-div w-1/2 h-48 bg-gray-50 "></div>
						<div className="small-div w-1/2 h-48 bg-gray-50 "></div>
					</div>
				</div>

				{/* Card Tile 2 */}
				<div className="flex flex-col gap-2.5 w-full border ">
					<div className=" w-full h-48 bg-gray-50 "></div>
					<div className=" flex gap-2.5">
						<div className="small-div w-1/2 h-48 bg-gray-50 "></div>
						<div className="small-div w-1/2 h-48 bg-gray-50 "></div>
					</div>
					<div className=" w-full h-48 bg-gray-50"></div>
				</div>
			</div>
		</section>
	);
};

export default DashboardMain;
