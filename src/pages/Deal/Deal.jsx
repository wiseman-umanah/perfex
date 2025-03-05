import React from 'react';
import { TbChartBar } from "react-icons/tb";
import { GrMenu } from "react-icons/gr";
import { RiExchangeDollarLine } from "react-icons/ri";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { MdOutlineEdit } from "react-icons/md";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { BsPin } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { IoMdAdd, IoMdArrowDropdown } from "react-icons/io";


const Deal = () => {
	return (
		<main className="flex flex-col mt-14 ml-12 h-full bg-white">
			<aside className="flex justify-between items-center px-3 py-4 w-full h-12 border">
				<div className="flex gap-2 items-center">
					<div className="flex border border-gray-400 py-1 px-3 rounded-md text-lg gap-4 items-center">
						<TbChartBar className='border-l-gray-400 transform rotate-180 border-l'/>
						<GrMenu className='border-r-gray-400 border-r'/>
						<RiExchangeDollarLine />
					</div>
					<div className="bg-green-800 flex rounded-md justify-center gap-1 px-1 text-white items-center border border-white font-bold">
						<div className='px-1 flex gap-1.5 items-center border-r justify-center border-gray-50'>
							<IoMdAdd />
							<span>Deal</span>
						</div>
						<div className=''>
							<IoMdArrowDropdown />
						</div>
					</div>
				</div>
				<div className='flex gap-1 items-center'>
					<span>$42,000</span>
					<span>.</span>
					<span className='flex gap-1 items-center '>
						<LiaBalanceScaleSolid />
						$31,025
					</span>
					<span>.</span>
					<span>30 deals</span>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<div className='flex items-center gap-1 border-r border-r-gray-400'>
							<TbChartBar className='transform rotate-180'/>
							<span>Clients</span>
							<IoMdArrowDropdown />
						</div>
						<MdOutlineEdit />	
					</div>
					<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
						<HiBars3BottomLeft />
						<span>Everyone</span>
						<IoMdArrowDropdown />
					</div>
				</div>
			</aside>
			<div className="w-full h-full">
				<aside className="flex justify-between items-center px-3 py-4">
					<div className='flex gap-1 text-gray-400 items-center'>
						<BsPin />
						<span>Pin filters</span>
					</div>
					<div className='flex gap-1 text-purple-800'>
						<div className='bg-gray-50 p-1 flex items-center rounded-md'>
						 	<AiOutlineArrowUp />
						</div>
						<div className='flex gap-2 bg-gray-50 px-1 py-2 items-center rounded-md'>
							<span>Sort by: Next Activity</span>
							<IoMdArrowDropdown />
						</div>
					</div>
				</aside>
				{/* Pinned deals */}
			</div>
		</main>
	)
};

export default Deal;

