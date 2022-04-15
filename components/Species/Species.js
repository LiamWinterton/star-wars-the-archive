import SpeciesSingle from "./SpeciesSingle"

export default function Species(props) {
	return (
		<>
			<p>Results: {props.count}</p>
			<div>
				{props.species.map((species, i) => {
					return <SpeciesSingle key={species.name} species={species} />
				})}
			</div>
		</>
	)
}