import React from 'react';

const DashboardMain = () => {
	return (
		<section className="w-full h-full border border-blue-900 flex flex-col">
			<aside className="w-full h-12 border border-red-900">
				top
			</aside>
			<div className="card-container flex border border-purple-900 h-full">
				<div className="card-tile w-full border border-blue-900 flex flex-col gap-2 p-5">
					<div className="analytics-1 w-full h-48 bg-blue-900 rounded-lg"></div>
					<div className="analytics-2 flex gap-2">
						<div className="small-div w-1/2 h-48 bg-blue-900 rounded-lg"></div>
						<div className="small-div w-1/2 h-48 bg-blue-900 rounded-lg"></div>
					</div>
				</div>
				<div className="card-tile w-full border border-blue-900 flex flex-col gap-2 p-5">
					<div className="analytics-1 w-full h-48 bg-blue-900 rounded-lg"></div>
					<div className="analytics-2 flex gap-2">
						<div className="small-div w-1/2 h-48 bg-blue-900 rounded-lg"></div>
						<div className="small-div w-1/2 h-48 bg-blue-900 rounded-lg"></div>
					</div>
					<div className="analytics-1 w-full h-48 bg-blue-900 rounded-lg"></div>
				</div>
			</div>
		</section>
	);
};

export default DashboardMain;
