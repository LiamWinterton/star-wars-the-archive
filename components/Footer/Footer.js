import Image from 'next/image'

import Grid from '../Layout/Grid'
import Menu from '../Menu/Menu'

import styles from './Footer.module.sass'

export default function Footer() {
	const pages = [
		{ text: "Home", href: "/" },
		{ text: "People", href: "/people" },
		{ text: "Species", href: "/species" },
		{ text: "Planets", href: "/planets" }
	]
	
	const about = [
		{ text: "Github", href: "#" },
		{ text: "Portfolio", href: "#" },
		{ text: "Twitter", href: "#" }
	]

	const resources = [
		{ text: "Next.js", href: "#" },
		{ text: "Figma", href: "#" },
		{ text: "VS Code", href: "#" },
		{ text: "Clickup", href: "#" }
	]

	return (
		<footer className={styles.footer}>
			<div className="container">
				<Grid columns="4">
					<div>
						<div className={styles.image}>
							<Image src="https://via.placeholder.com/300x300" width={300} height={300} alt="Star Wars: The Archive" />
						</div>
						<p>Sit duis luctus pellentesque aliquet diam, amet. Lorem tempus enim ornare ipsum tincidunt in fringilla. Dignissim tincidunt rhoncus sagittis, risus consequat amet magna. Mattis ac varius ornare tempus non ornare. Accumsan ipsum magna purus venenatis.</p>
					</div>
					<div>
						<h3 className={styles.title}>Pages</h3>
						<Menu links={pages} layout="vertical" />
					</div>
					<div>
						<h3 className={styles.title}>About Me</h3>
						<Menu links={about} layout="vertical" />
					</div>
					<div>
						<h3 className={styles.title}>Resources</h3>
						<Menu links={resources} layout="vertical" />
					</div>
				</Grid>
			</div>
		</footer>
	)
}