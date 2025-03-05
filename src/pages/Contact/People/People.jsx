import React from 'react';
import { MdMoreHoriz } from "react-icons/md";
import { IoMdAdd, IoMdArrowDropdown } from "react-icons/io";
import { HiBars3BottomLeft } from "react-icons/hi2";




const People = () => {
	return (
		<section className="bg-white flex flex-col p-2.5 w-full h-full overflow-auto">
			<aside className="flex justify-between items-center px-3 w-full h-12 ">
				<div className="flex gap-2 items-center">
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
				<div className='flex gap-1'>
					<span>140 people</span>
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
				<aside className="flex justify-start text-xs items-center px-3 py-2 gap-2">
					<span className='bg-purple-200 px-2 py-1 text-purple-800 rounded-sm'>
						All
					</span>
					<div className='flex gap-5'>
						<span>A</span>
						<span>B</span>
						<span>C</span>
						<span>D</span>
						<span>E</span>
						<span>F</span>
						<span>G</span>
						<span>H</span>
						<span>I</span>
						<span>J</span>
						<span>K</span>
						<span>L</span>
						<span>M</span>
						<span>N</span>
						<span>O</span>
						<span>P</span>
						<span>Q</span>
						<span>R</span>
						<span>S</span>
						<span>T</span>
						<span>U</span>
						<span>V</span>
						<span>W</span>
						<span>X</span>
						<span>Y</span>
						<span>Z</span>
					</div>
				</aside>
				{/* Calendar of event */}
			</div>
		</section>
	)
};

export default People;

