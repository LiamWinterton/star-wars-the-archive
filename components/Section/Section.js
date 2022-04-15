export default function Section(props) {
	return (
		<section>
			<div>
				<h2>{props.title}</h2>
				<div>
					{props.children}
				</div>
			</div>
		</section>
	)
}