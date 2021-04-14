function NavBar() {
	const pages = [
		"About me",
		"About Argo",
		"Skills",
		"Education",
		"Other projects",
	]
	return (
		<div className="mb-5">
			<h1 className=" text-3xl mb-5">
				<span className="text-red-400">ROBERTO SCIONI</span>
			</h1>
			<div className="flex flex-wrap  gap-2 font-bold">
				{pages.map((page, index) => (
					<a href={page}>
						<p className="px-2 text-blue-400 transition duration-700 transform hover:-translate-y-2 hover:text-green-400 align-baseline h-full">
							{page}
						</p>
					</a>
				))}

				<div className="flex-grow"></div>

				<a href="mailto:Pctech.Robertoscioni@gmail.com">
					<p className="px-2 text-blue-400 transition duration-700 transform hover:-translate-y-2 hover:text-green-400 align-baseline h-full">
						@mail
					</p>
				</a>
				<a href="https://github.com/RobertoScioni">
					<p className="px-2 text-blue-400 transition duration-700 transform hover:-translate-y-2 hover:text-green-400 align-baseline h-full">
						GitHub
					</p>
				</a>
				<a href="https://www.linkedin.com/in/robertoscioni/">
					<p className="px-2 text-blue-400 transition duration-700 transform hover:-translate-y-2 hover:text-green-400 align-baseline h-full">
						LinkeDin
					</p>
				</a>
			</div>
		</div>
	)
}

export default NavBar
