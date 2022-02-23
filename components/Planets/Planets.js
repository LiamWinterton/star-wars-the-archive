import PlanetSingle from "./PlanetSingle"

import styles from './Planets.module.sass'

export default function Planets(props) {
	return (
		<div>
			<p className={styles.results}>Results: {props.count}</p>
			{props.planets.map((planet, i) => {
				return <PlanetSingle key={planet.name} planet={planet} />
			})}
		</div>
	)
}