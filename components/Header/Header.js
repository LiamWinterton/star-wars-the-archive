import Image from 'next/image'
import Menu from '../Menu/Menu'

export default function Header() {
	const links = [
		{ text: "Home", href: "/" },
		{ text: "People", href: "/people" },
		{ text: "Species", href: "/species" },
		{ text: "Planets", href: "/planets" }
	]

	return (
		<header className="header">
			<div className="logo">
				<Image src={"/death-star.svg"} alt="Star Wars: The Archive" width="100px" height="100px" />
			</div>

			<Menu links={links} />
		</header>
	)
}