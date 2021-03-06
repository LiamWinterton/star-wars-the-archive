import Link from 'next/link'

export default function Menu({ links }) {
	return (
		<nav className="relative z-50">
			<ul className="md:flex md:space-x-12 text-white font-bold lg:text-md xl:text-2xl">
				{links.map((link, i) => {
					return (
						<li key={i}>
							<Link href={link.href}>
								<a className="hover:underline">{link.text}</a>
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}