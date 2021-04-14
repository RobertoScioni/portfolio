import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"
import "./index.css"
import NavBar from "./Navbar"
import reportWebVitals from "./reportWebVitals"
import AboutMe from "./pages/About Me"
import Skills from "./pages/Skills"
import Argo from "./pages/Argo.jsx"
import StriveSchool from "./pages/Education"
import ComingSoon from "./pages/Coming Soon"
ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<div className=" text-gray-300 p-1 md:p-4 h-full">
				<NavBar />
				<Route exact path="/">
					<AboutMe />
				</Route>
				<Route exact path="/About Me">
					<AboutMe />
				</Route>
				<Route exact path="/Skills">
					<Skills />
				</Route>
				<Route exact path="/About Argo">
					<Argo />
				</Route>
				<Route exact path="/Education">
					<StriveSchool />
				</Route>
				<Route exact path="/Other projects">
					<ComingSoon />
				</Route>
			</div>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
