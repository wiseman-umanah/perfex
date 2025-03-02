import React from 'react';
import { IoMdAdd, IoIosSearch } from "react-icons/io";

const MinNav = () => {
	return (
		<section className="p-4 border w-64 h-full bg-gray-50">
			<div className="flex justify-between mb-5">
				<div className="flex gap-2">
					<div className="flex items-center border rounded-md px-3">
						<IoIosSearch className="icon-style mr-1"/>
						<input type="text" placeholder="Search" className="border-none bg-transparent w-full h-full focus:outline-none" />
					</div>
					<div className="border rounded-md w-8 h-8 flex justify-center items-center bg-green-600">
						<IoMdAdd className="icon-style text-white" />
					</div>
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
