import { useRouter } from 'next/router'
import Image from 'next/image'

import Hero from '../Hero/Hero'
import Menu from '../Menu/Menu'
import Relative from '../Relative/Relative'

import styles from './Header.module.sass'

export default function Header() {
	const router = useRouter()

	const links = [
		{ text: "Home", href: "/" },
		{ text: "People", href: "/people/1" },
		{ text: "Species", href: "/species/1" },
		{ text: "Planets", href: "/planets/1" }
	]

	const headerStyles = [ styles.header ]

	if(router.route == "/") {
		headerStyles.push(styles['home-header'])
	}

	const content = (
		<div className="container">
			<div className={styles.container}>
				<div className="logo">
					<Image src={"/death-star.svg"} alt="Star Wars: The Archive" width={100} height={100} />
				</div>
				<Menu links={links} layout="horizontal" />
			</div>
			{router.pathname === "/" ? <Hero /> : undefined}
		</div>
	)

	return (
		<Relative 
			wrapper={<header className={headerStyles.join(" ")}></header>}
			content={content}
			backgroundImage={<Image src={"/space.jpg"} objectFit="cover" layout="fill" alt="" />}
		/>
	)
}