export default function Section(props) {
	return (
		<section className={`py-6 md:py-12 lg:py-20 ${props.className}`}>
			<div className='container'>
				<h2 className="text-2xl font-starwars text-center mb-9 md:mb-12 lg:text-4xl lg:mb-20 xl:text-6xl">{props.title}</h2>
				{props.children}
			</div>
		</section>
	)
}