import Image from 'next/image'

export default function Hero() {
	return (
		<div>
			<h1 className='hidden'>Star Wars:<br />The Archive</h1>
			<Image src="/hero-luke-2.png" alt="Luke Skywalker" layout="responsive" width={750} height={858} priority />	
		</div>
	)
}