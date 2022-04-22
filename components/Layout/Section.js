export default function Section(props) {
	return (
		<section className="py-6 md:py-12 lg:py-20">
			<div className='container'>
				<h2 className="text-2xl font-starwars text-center mb-9 lg:text-left">{props.title}</h2>
				{props.children}
			</div>
		</section>
	)
}