import React from "react";

export const AboutPage: React.FC = () => {
	return(
		<>
			<h1 className="page-title">About the App</h1>
			<ul className="collection">
				<li className="collection-item">The application contains 2 pages: home and todo list</li>
				<li className="collection-item">Navigation between pages must be done via navbar</li>
				<li className="collection-item">The main page contains a logo and a brief description of the page. The page for the todo list implements an interactive list</li>
				<li className="collection-item">Data for the list was requested from `https://jsonplaceholder.typicode.com/todos`</li>
				<li className="collection-item">Implemented the ability to add/change/delete todo</li>
				<li className="collection-item">pagination implemented without page reload</li>
			</ul>
			<h3 className="page-title">I use</h3>
			<ul className="collection">
				<li className="collection-item">React</li>
				<li className="collection-item">Redux</li>
				<li className="collection-item">React router</li>
				<li className="collection-item">Typescript</li>
				<li className="collection-item">Axios</li>
				<li className="collection-item">CSS library <a href="https://materializecss.com/">Materializecss</a></li>
			</ul>
		</>
	)
}