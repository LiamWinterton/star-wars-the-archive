import { useRouter } from 'next/router'
import Image from 'next/image'

import Hero from '../Hero/Hero'
import Menu from '../Menu/Menu'
import Relative from '../Relative/Relative'

import Link from 'next/link'

export default function Header() {
	const router = useRouter()

	const links = [
		{ text: "Home", href: "/" },
		{ text: "People", href: "/people/1" },
		{ text: "Species", href: "/species/1" },
		{ text: "Planets", href: "/planets/1" }
	]

	const content = (
		<div className="container">
			<div>
				<div className="logo">
					<Link href="/" passHref>
						<a>
							<Image src={"/death-star.svg"} alt="Star Wars: The Archive" width={100} height={100} />
						</a>
					</Link>
				</div>
				<Menu links={links} layout="horizontal" />
			</div>
			{router.pathname === "/" ? <Hero /> : undefined}
		</div>
	)

	return (
		<Relative 
			wrapper={<header></header>}
			content={content}
			backgroundImage={<Image src={"/space.jpg"} objectFit="cover" layout="fill" alt="" priority />}
		/>
	)
}