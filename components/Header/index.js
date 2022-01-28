import Image from 'next/image'
import Menu from './menu'

export default function Header() {
	return (
		<header className="header">
			<div className="logo">
				<Image src={"/death-star.svg"} alt="Star Wars: The Archive" width="100px" height="100px" />
			</div>

			<Menu />
		</header>
	)
}