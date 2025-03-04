import React from 'react';
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdInformationCircleOutline } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";

const DealConversion = () => {
	return (
		<section className="bg-gray-200 flex flex-col p-2.5 w-full h-full overflow-auto">
			<aside className="flex justify-between my-4 items-start h-12 border">
				<div>
					<div className='font-bold mb-4'>
						Deal Conversion
					</div>
					<div className='flex items-center'>
						<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
							<PiCurrencyCircleDollarLight />
							<span>Conversion</span>
							<IoMdArrowDropdown />
						</div>
						<hr className="border-gray-400 mx-2.5" />
						<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
							<div>Funnel</div>
							<div>Win/loss</div>
						</div>
						<IoMdInformationCircleOutline className='ml-1'/>
					</div>
				</div>
				<div className="flex">
					<div className="flex gap-2.5">
						<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
							<span>Add to dashboard</span>
							<IoMdArrowDropdown />
						</div>
						<div className="flex items-center gap-2.5 px-2.5 bg-white rounded border border-gray-400">
							<IoShareSocialOutline  />
							<span>Share</span>
						</div>
						<div className="flex items-center px-2.5 bg-white rounded border border-gray-400">
							<MdMoreHoriz />
						</div>
					</div>
				</div>
			</aside>
			<div className="h-full mt-6">
				{/* Card Tile 1 */}
				<div className="w-full border h-52 bg-gray-50">
					<div>
						
					</div>
					<div>
						
					</div>
				</div>

				{/* Card Tile 2 */}
				<div className="w-full border h-56 bg-gray-50 my-3">
					
				</div>

				{/* Card Tile 3 */}
				<div className="w-full border h-56 bg-gray-50">

				</div>
			</div>
		</section>
	);
};

export default DealConversion;
