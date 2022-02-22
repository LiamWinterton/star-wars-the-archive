import SpeciesSingle from "./SpeciesSingle"

import styles from './Species.module.sass'

export default function Species(props) {
	return (
		<div>
			<p className={styles.results}>Results: {props.count}</p>
			{props.species.map((species, i) => {
				return <SpeciesSingle key={species.name} species={species} />
			})}
		</div>
	)
}