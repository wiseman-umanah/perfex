import React from 'react';

const MinNav = () => {
	return (
		<section className="min-nav p-5 border border-black w-64 h-full">
			<div className="flex justify-between mb-5">
				<div className="search-bar">
					<input type="text" placeholder="Search" className="p-2 border border-gray-300 rounded"/>
					<button className="p-2">
						
					</button>
				</div>
			</div>
			<div>
				<details>
					<summary>Dashboard</summary>
					<ul className="list-none mb-10">
						<li className="mb-5">Dashboard 1</li>
						<li className="mb-5">Dashboard 2</li>
						<li className="mb-5">Dashboard 3</li>
					</ul>
				</details>
				<details>
					<summary>Goals</summary>
					<ul className="list-none mb-10">
						<li className="mb-5">Dashboard 1</li>
						<li className="mb-5">Dashboard 2</li>
						<li className="mb-5">Dashboard 3</li>
					</ul>
				</details>
				<details>
					<summary>Reports</summary>
					<ul className="list-none mb-10">
						<li className="mb-5">Dashboard 1</li>
						<li className="mb-5">Dashboard 2</li>
						<li className="mb-5">Dashboard 3</li>
					</ul>
				</details>
			</div>
		</section>
	);
};

export default MinNav;
