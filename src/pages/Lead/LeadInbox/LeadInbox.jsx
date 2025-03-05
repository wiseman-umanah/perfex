import React from 'react';
import { HiOutlineInbox } from "react-icons/hi";
import { FiArchive } from "react-icons/fi";
import { IoMdAdd, IoMdArrowDropdown } from "react-icons/io";
import { LiaTagSolid } from "react-icons/lia";
import { MdMoreHoriz } from "react-icons/md";

const LeadsInbox = () => {
	return (
		<section className="bg-gray-200 flex flex-col w-full h-full overflow-auto">
			<aside className="flex justify-between items-center px-3 py-4 bg-gray-50 h-12 border">
				<div className="flex gap-2 items-center">
					<div className="flex border border-gray-400 py-1 px-3 justify-between rounded-md text-lg gap-4 items-center">
						<HiOutlineInbox className='border-r-gray-400'/>
						<FiArchive />
					</div>
					<div className="bg-green-800 flex rounded-md justify-center gap-1 px-1 text-white items-center border border-white font-bold">
						<div className='px-1 flex gap-1.5 items-center border-r justify-center border-gray-50'>
							<IoMdAdd />
							<span>Lead</span>
						</div>
						<div className=''>
							<IoMdArrowDropdown />
						</div>
					</div>
				</div>
				<div className='flex gap-1'>
					<span>36 leads</span>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<LiaTagSolid />
						<span>All sources</span>
						<IoMdArrowDropdown />
					</div>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<LiaTagSolid />
						<span>All labels</span>
						<IoMdArrowDropdown />
					</div>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<LiaTagSolid />
						<span>Everyone</span>
						<IoMdArrowDropdown />
					</div>
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

export default LeadsInbox;
