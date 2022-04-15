import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Hero from '../Hero/Hero'
import Nav from './Nav'

import Link from 'next/link'

export default function Header() {
	const router = useRouter()

	const [navIsOpen, setnavIsOpen] = useState(false)

	const links = [
		{ text: "Home", href: "/" },
		{ text: "People", href: "/people/1" },
		{ text: "Species", href: "/species/1" },
		{ text: "Planets", href: "/planets/1" }
	]

	return (
		<header className="relative">
			<div className="container py-6 relative z-20 lg:py-12">
				<div className='flex justify-between items-center'>
					<Link href="/" passHref>
						<a className="flex flex-col items-center">
							<Image src={"/death-star.svg"} alt="Star Wars: The Archive" width={100} height={100} />
							<h1 className="font-starwars text-white">SW: TA</h1>
						</a>
					</Link>

					<div className="space-y-2 md:hidden" onClick={e => setnavIsOpen(!navIsOpen)}>
						<div className="w-8 h-0.5 bg-white"></div>
						<div className="w-8 h-0.5 bg-white"></div>
						<div className="w-8 h-0.5 bg-white"></div>
					</div>

					<div className={`${navIsOpen ? 'block' : 'hidden md:block'}`}>
						<Nav links={links} />
					</div>
				</div>
				{/* {router.pathname === "/" ? <Hero /> : undefined} */}
			</div>
			<Image src={"/space.jpg"} objectFit="cover" layout="fill" alt="" className="z-10" priority />
		</header>
	)
}