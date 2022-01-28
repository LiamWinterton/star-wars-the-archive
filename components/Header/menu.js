import Link from "next/link";

export default function Menu() {
	return (
		<div className="menu">
			<Link href="/">Home</Link>
			<Link href="/people">People</Link>
			<Link href="/species">Species</Link>
			<Link href="/planets">Planets</Link>
		</div>
	)
}