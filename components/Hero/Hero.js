import Image from 'next/image'

export default function Hero() {
	return (
		<div className="flex md:py-40 lg:-mt-6 xl:py-60 2xl:py-80">
			<div className='hidden md:block'>
				<h1 className="text-4xl text-white font-starwars lg:text-6xl xl:text-7xl">Star Wars:<br />The Archive</h1>
			</div>
			<div className="h-full w-full md:absolute md:top-0 md:w-8/12 md:right-0 md:overflow-clip">
				<Image src="/hero-luke-2.png" alt="Luke Skywalker" layout="responsive" width={750} height={858} priority />	
			</div>
		</div>
	)
}