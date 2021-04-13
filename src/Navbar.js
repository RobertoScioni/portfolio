function NavBar() {
	const pages = [
		"About me",
		"About Argo",
		"Skills",
		"Education",
		"Other projects",
	]
	return (
		<div>
			<h1 className=" text-3xl">
				<span className="text-red-400">ROBERTO SCIONI</span>
			</h1>
			<div className="flex flex-wrap  gap-2 font-bold">
				{pages.map((page, index) => (
					<a
						href={page}
						className="px-2 text-blue-400 transform hover:-translate-y-2 hover:text-green-400 align-baseline h-full"
					>
						{page}
					</a>
				))}

				<div className="flex-grow"></div>

				<a
					href="mailto:Pctech.Robertoscioni@gmail.com"
					className="px-2 text-blue-400 transform hover:-translate-y-2 hover:text-green-400 align-baseline h-full"
				>
					@mail
				</a>
				<a
					href="https://github.com/RobertoScioni"
					className="px-2 text-blue-400 transform hover:-translate-y-2 hover:text-green-400 align-baseline h-full"
				>
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/robertoscioni/"
					className="px-2 text-blue-400 transform hover:-translate-y-2 hover:text-green-400 align-baseline h-full"
				>
					LinkeDin
				</a>
			</div>
		</div>
	)
}

export default NavBar
