import Feature from './Feature'

function displayFeatures(features) {
	return features.map((feature, i) => {
		return (
			<Feature key={i} title={`Feature ${i}`}>
				{feature}
			</Feature>
		)
	})
}

export default function Features() {
	const features = [
		"Egestas mi tortor enim ut posuere enim. Nec fusce sit urna quam suspendisse. Sollicitudin arcu, eget ornare aenean mi gravida at. Neque pellentesque purus aenean.",
		"Egestas mi tortor enim ut posuere enim. Nec fusce sit urna quam suspendisse. Sollicitudin arcu, eget ornare aenean mi gravida at. Neque pellentesque purus aenean.",
		"Egestas mi tortor enim ut posuere enim. Nec fusce sit urna quam suspendisse. Sollicitudin arcu, eget ornare aenean mi gravida at. Neque pellentesque purus aenean.",
		"Egestas mi tortor enim ut posuere enim. Nec fusce sit urna quam suspendisse. Sollicitudin arcu, eget ornare aenean mi gravida at. Neque pellentesque purus aenean."
	]
	
	return (
		<div>
			{displayFeatures(features)}
		</div>
	)
}