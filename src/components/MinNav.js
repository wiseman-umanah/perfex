import React from 'react';
import { IoSearch } from "react-icons/io5";

const MinNav = () => {
	return (
		<section className="p-4 border border-black w-64 h-full">
			<div className="flex justify-between mb-5">
				<div className="search-bar">
					<input type="text" placeholder="Search" className="p-2 border border-gray-300 rounded w-40 h-5"/>
					<button className='ml-2'>
						<IoSearch />	
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
