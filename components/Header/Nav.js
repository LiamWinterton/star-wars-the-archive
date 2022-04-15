import Link from 'next/link'

export default function Menu({ links }) {
	return (
		<nav>
			<ul className="md:flex md:space-x-12 text-white font-bold lg:text-md">
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