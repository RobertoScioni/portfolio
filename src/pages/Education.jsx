import { Helmet } from "react-helmet"

const Education = () => {
	return (
		<div>
			<Helmet>
				<title>Roberto Scioni/Education</title>
				<meta name="Education" />
			</Helmet>
			<p>
				<b className="text-green-400"> Strive School</b>
				<p className="ml-10">
					Strive School is a six months intensive course I attended to learn the
					M.E.R.N. stack. <br />I had the opportunity to update my JavaScript
					knowledge and to learn the modern way to develop web-applications
				</p>
			</p>
			<p>
				<b className="text-green-400"> High School Diploma in IT</b>
				<p className="ml-10">
					Before Strive i Received a formal education as a computer expert
					(Perito informatico) in high school
				</p>
			</p>
		</div>
	)
}
export default Education
