import Image from 'next/image'

import Grid from '../Layout/Grid'
import Menu from '../Menu/Menu'

export default function Footer() {
	const pages = [
		{ text: "Home", href: "/" },
		{ text: "People", href: "/people" },
		{ text: "Species", href: "/species" },
		{ text: "Planets", href: "/planets" }
	]
	
	const about = [
		{ text: "Github", href: "https://github.com/LiamWinterton" },
		{ text: "Portfolio", href: "https://www.liam.winterton.dev/" }
	]

	const resources = [
		{ text: "Next.js", href: "#" },
		{ text: "Figma", href: "#" },
		{ text: "VS Code", href: "#" },
		{ text: "Clickup", href: "#" }
	]

	return (
		<footer className="py-6 bg-gray-50 lg:py-12">
			<div className="container">
				<div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
					<div>
						<div className="mb-3">
							<Image src="/images/400x400.png" width={300} height={300} alt="Star Wars: The Archive" />
						</div>

						<p>Sit duis luctus pellentesque aliquet diam, amet. Lorem tempus enim ornare ipsum tincidunt in fringilla. Dignissim tincidunt rhoncus sagittis, risus consequat amet magna. Mattis ac varius ornare tempus non ornare. Accumsan ipsum magna purus venenatis.</p>
					</div>

					<div>
						<h3 className="text-2xl font-bold mb-3">Pages</h3>
						<Menu links={pages} layout="vertical" />
					</div>
					<div>
						<h3 className="text-2xl font-bold mb-3">About Me</h3>
						<Menu links={about} layout="vertical" />
					</div>
					<div>
						<h3 className="text-2xl font-bold mb-3">Resources</h3>
						<Menu links={resources} layout="vertical" />
					</div>
				</div>
			</div>
		</footer>
	)
}