import React from 'react';
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdInformationCircleOutline } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import Deals from '../../UserDashboards/Deals';


const DealConversion = () => {
	const deals = [
		{
		  title: "Winter sale deal",
		  dealValue: "$9,848",
		  pipeline: "Demo",
		  status: "Win",
		  wonTime: "Mar 05, 2025 11:37 AM",
		  lastTime: "Mar 04, 2025 12:34 PM",
		  owner: "Kate Brown",
		},
		{
		  title: "Message for digital ads",
		  dealValue: "$7,231",
		  pipeline: "Demo",
		  status: "Lost",
		  wonTime: "Mar 02, 2025 11:59 AM",
		  lastTime: "Mar 02, 2025 12:34 PM",
		  owner: "Kate Brown",
		},
		{
		  title: "Volume sales deal",
		  dealValue: "$15,921",
		  pipeline: "Demo",
		  status: "Win",
		  wonTime: "Mar 01, 2025 11:58 AM",
		  lastTime: "Mar 01, 2025 12:34 PM",
		  owner: "Kate Brown",
		},
	  ];

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
				<div className="w-full border h-64 bg-gray-50 my-3">
					<Deals />
				</div>

				{/* Card Tile 3 */}
				<div className="w-full border bg-gray-50">
				<div className="overflow-x-auto">
					<table className="min-w-full border border-gray-300">
					<thead className="bg-gray-100">
						<tr className="border-b">
						<th className="px-4 py-2 text-left border border-gray-400">Title</th>
						<th className="px-4 py-2 text-left border border-gray-400">Deal Value</th>
						<th className="px-4 py-2 text-left border border-gray-400">Pipeline</th>
						<th className="px-4 py-2 text-left border border-gray-400">Status</th>
						<th className="px-4 py-2 text-left border border-gray-400">Won Time</th>
						<th className="px-4 py-2 text-left border border-gray-400">Last Time</th>
						<th className="px-4 py-2 text-left border border-gray-400">Owner</th>
						</tr>
					</thead>
					<tbody>
						{deals.map((deal, index) => (
						<tr
							key={index}
							className="border-b hover:bg-gray-50 text-sm text-gray-700"
						>
							<td className="px-4 py-2 border border-gray-400">{deal.title}</td>
							<td className="px-4 py-2 border border-gray-400">{deal.dealValue}</td>
							<td className="px-4 py-2 border border-gray-400">{deal.pipeline}</td>
							<td className="px-4 py-2 border border-gray-400">{deal.status}</td>
							<td className="px-4 py-2 border border-gray-400">{deal.wonTime}</td>
							<td className="px-4 py-2 border border-gray-400">{deal.lastTime}</td>
							<td className="px-4 py-2 border border-gray-400">{deal.owner}</td>
						</tr>
						))}
					</tbody>
					</table>
				</div>
				</div>
			</div>
		</section>
	);
};

export default DealConversion;
