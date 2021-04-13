function NavBar() {
	return (
		<div className=" text-gray-300 p-1 md:p-4">
			<div className="flex flex-wrap items-baseline gap-4 font-bold">
				<h1 className=" text-2xl">ROBERTO SCIONI's Portfolio</h1>
				<div className=" flex mb-0 transform hover:-translate-y-2 hover:text-green-400">
					Story
				</div>
				<div className=" flex mb-0 transform hover:-translate-y-2 hover:text-green-400">
					Skills
				</div>
				<div className=" flex mb-0 transform hover:-translate-y-2 hover:text-green-400">
					Strive-school
				</div>
				<div className=" flex mb-0 transform hover:-translate-y-2 hover:text-green-400">
					Argo
				</div>
			</div>
		</div>
	)
}

export default NavBar
