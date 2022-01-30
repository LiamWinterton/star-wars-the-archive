import Image from 'next/image'

import Menu from '../Menu/Menu'
import Relative from '../Relative/Relative'

import styles from './Header.module.sass'

export default function Header() {
	const links = [
		{ text: "Home", href: "/" },
		{ text: "People", href: "/people" },
		{ text: "Species", href: "/species" },
		{ text: "Planets", href: "/planets" }
	]

	const content = (
		<div className="container">
			<div className="logo">
				<Image src={"/death-star.svg"} alt="Star Wars: The Archive" width={100} height={100} />
			</div>

			<Menu links={links} />
		</div>
	)

	return (
		<Relative 
			wrapper={<header className={styles.header}></header>}
			content={content}
			backgroundImage={<Image src={"/space.png"} objectFit="cover" layout="fill" alt="" />}
		/>
	)
}