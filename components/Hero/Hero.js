import Image from 'next/image'

export default function Hero() {
	return (
		<div>
			<h1>Star Wars:<br />The Archive</h1>
			<Image src="/hero-luke-2.png" alt="Luke Skywalker" width={600} height={600} priority />	
		</div>
	)
}