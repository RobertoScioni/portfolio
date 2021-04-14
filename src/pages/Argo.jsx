import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faSquare } from "@fortawesome/free-solid-svg-icons"

const Argo = () => {
	const FeaturesDelivered = [
		"Reactive Interface",
		"Instant Messaging",
		"Character Impersonation",
		"Standard Dice Notation",
		"Interactive character sheet",
		"Fate Core character sheet",
		"Character Sheet creation Tool",
	]
	const toDo = [
		"Variables in character sheet",
		"D&D 5e character sheet",
		"Battle Maps",
	]
	return (
		<div className="flex flex-col">
			<Helmet>
				<title>Roberto Scioni/Argo</title>
				<meta name="Argo" />
			</Helmet>
			<header>
				<h3 className=" text-2xl text-green-400">Argo</h3>
				<h5 className=" ml-10 text-xl">
					Responsive Web Application to manage roleplaying games.
				</h5>
			</header>
			<br />
			<article>
				<h5 className=" text-xl text-green-400">Features</h5>
				<dl className=" flex gap-4 flex-wrap">
					<div>
						<dt className="text-blue-400">Implemented</dt>
						<dd>
							<ul className=" list-inside text-green-400">
								{FeaturesDelivered.map((feature) => (
									<li key={feature} className="ml-4">
										<FontAwesomeIcon icon={faCheck} />
										<span className="ml-2">{feature}</span>
									</li>
								))}
							</ul>
						</dd>
					</div>
					<div className=" border-l-2 border-gray-300"></div>
					<div>
						<dt className="text-blue-400">Coming Soon</dt>
						<dd>
							<ul className="list-inside">
								{toDo.map((feature) => (
									<li key={feature} className="ml-4">
										<FontAwesomeIcon icon={faSquare} />
										<span className="ml-2">{feature}</span>
									</li>
								))}
							</ul>
						</dd>
					</div>
				</dl>

				<br />
				<p>
					Argo is my passion project. I designed the UI and handcrafted both
					Frontend and Backend. It’s still under heavy development but it’s
					already usable.
				</p>
				<div className=" flex-grow"></div>
			</article>

			<footer>
				The code and live demo can be found at the following links
				<a href="https://github.com/RobertoScioni/rpgtool-fe/tree/main">
					: Frontend
				</a>
				,<a href="https://github.com/RobertoScioni/RPGTOOL-BE"> Backend</a>,
				<a href="https://rpgtool-fe.vercel.app/"> Demo</a>
			</footer>
		</div>
	)
}
export default Argo
