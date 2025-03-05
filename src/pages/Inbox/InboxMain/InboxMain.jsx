import React from 'react';
import { IoMdAdd, IoMdArrowDropdown, IoIosSearch } from "react-icons/io";
import { LiaTagSolid } from "react-icons/lia";
import { MdMoreHoriz } from "react-icons/md";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoReload } from "react-icons/io5";


const InboxMain = () => {
	return (
		<section className="bg-gray-200 flex flex-col w-full h-full overflow-auto">
			<aside className="flex justify-between items-center px-3 py-4 bg-gray-50 h-12 border">
				<div className="flex gap-1 items-center">
					<div className="flex rounded-md justify-center gap-1 px-1 text-white items-center border border-white font-bold">
						<IoMdAdd className='border-r border-r-gray-200'/>
						<IoMdArrowDropdown />
					</div>
					<hr />
					<div className="flex border border-gray-400 py-1 px-3 justify-between rounded-md text-lg gap-4 items-center">
						<IoReload />
					</div>
				</div>
				<div className='flex gap-1'>
					<span>2136 conversations</span>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<LiaTagSolid />
						<span>Labels</span>
						<IoMdArrowDropdown />
					</div>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<HiBars3BottomLeft />
						<span>Filters</span>
						<IoMdArrowDropdown />
					</div>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<IoIosSearch />
					</div>
					<hr className='mx-1'/>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<MdMoreHoriz />
					</div>
				</div>
			</aside>
			<div className="h-full">
				{/* leads table */}
			</div>
		</section>
	);
};

export default InboxMain;
