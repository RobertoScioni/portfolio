const { Helmet } = require("react-helmet")

const Skills = () => {
	const Skills = {
		"Programming Languages": ["Javascript", "Bash", "PHP", "C", "Pascal"],
		"Framework and Libraries": ["React", "Express", "Redux"],
		"Markup and Style": ["HTML", "CSS", "Bootstrap", "Tailwind"],
		"Database Management Systems": ["MongoDB", "Postgres", "MySql"],
		"Operating Systems": [
			"Linux(manjaro,fedora,debian)",
			"Windows( from xp to 10)",
		],
		"Management Tools": ["Trello", "Discord", "Zoom", "Github"],
		Languages: ["English", "Italian"],
	}
	return (
		<div>
			<Helmet>
				<title>Roberto Scioni/Skills</title>
				<meta name="Skills" />
			</Helmet>
			{Object.keys(Skills).map((key) => (
				<div>
					<b className="text-green-400">{key}</b>
					<div className="ml-10 flex flex-wrap gap-4">
						{Skills[key].map((skill) => (
							<span className=" transition duration-300 transform hover:scale-150 hover:text-yellow-400 hover:bg-black hover:z-10">
								{skill}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default Skills
