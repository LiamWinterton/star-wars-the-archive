import PlanetSingle from "./PlanetSingle"

export default function Planets(props) {
	return (
		<div>
			<p>Results: {props.count}</p>
			{props.planets.map((planet, i) => {
				return <PlanetSingle key={planet.name} planet={planet} />
			})}
		</div>
	)
}