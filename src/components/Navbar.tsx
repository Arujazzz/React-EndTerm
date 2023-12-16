import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FunctionComponent = () => {


	return (
		<>
			<nav>
				<div className="nav-wrapper purple darken-2 px1" data-target="mobile-demo">
					<a href="/Typescript_TodoList" className="brand-logo left lm">
						ToDoList
					</a>
					<ul className="right">
						<li className="ls"><NavLink to="/TodoList">Home</NavLink></li>
						<li className="ls"><NavLink to="/todo">List of Tasks</NavLink></li>
					</ul>
				</div>
			</nav>
		</>
	)
}