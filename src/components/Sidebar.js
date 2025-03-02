import React from 'react';

const Sidebar = () => {
	return (
		<nav className="sidebar fixed top-0 left-0 w-12 h-full bg-purple-900 text-white p-2">
			<div className="logo">
				<i className="uil uil-search"></i>
			</div>
			<ul className="list-none p-0">
				<li><a href="#"><i className="uil uil-search"></i></a></li>
				<li><a href="#"><i className="uil uil-search"></i></a></li>
				<li><a href="#"><i className="uil uil-search"></i></a></li>
				<li><a href="#"><i className="uil uil-search"></i></a></li>
				<li><a href="#"><i className="uil uil-search"></i></a></li>
				<li><a href="#"><i className="uil uil-search"></i></a></li>
				<li><a href="#"><i className="uil uil-search"></i></a></li>
			</ul>
		</nav>
	);
};

export default Sidebar;
