const Argo = () => {
	return (
		<div className="flex flex-col">
			<header>
				<h3 className=" text-2xl text-green-400">Argo</h3>
				<h5 className=" ml-10 text-xl">
					Responsive Web Application to manage roleplaying games.
				</h5>
			</header>
			<br />
			<article>
				<h5 className=" text-xl text-green-400">Features</h5>
				<ul className=" ml-10 list-disc">
					<li>Integrated support for FATE CORE RPG.</li>
					<li>
						Ability to add support for new games without any programming
						knowledge.
					</li>
				</ul>
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
