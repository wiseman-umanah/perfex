import React from 'react';
import { HiOutlineInbox } from "react-icons/hi";
import { FiArchive } from "react-icons/fi";
import { IoMdAdd, IoMdArrowDropdown } from "react-icons/io";
import { LiaTagSolid } from "react-icons/lia";
import { MdMoreHoriz } from "react-icons/md";

const LeadsInbox = () => {
	return (
		<section className="bg-gray-200 flex flex-col p-2.5 w-full h-full overflow-auto">
			<aside className="flex justify-between items-center h-12 border">
				<div className="flex">
					<div className="flex gap-2.5">
						<HiOutlineInbox />
						<FiArchive />
					</div>
					<div className="flex gap-2.5">
						<div>
							<IoMdAdd />
							<span>Lead</span>
						</div>
						<div>
							<IoMdArrowDropdown />
						</div>
					</div>
				</div>
				<div>
					<span>36 leads</span>
					<div>
						<LiaTagSolid />
						All sources
						<IoMdArrowDropdown />
					</div>
					<div>
						<LiaTagSolid />
						All labels
						<IoMdArrowDropdown />
					</div>
					<div>
						<LiaTagSolid />
						Everyone
						<IoMdArrowDropdown />
					</div>
					<div>
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
