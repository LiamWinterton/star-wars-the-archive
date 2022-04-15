import SpeciesSingle from "./SpeciesSingle"

import styles from './Species.module.sass'

export default function Species(props) {
	return (
		<>
			<p className={styles.results}>Results: {props.count}</p>
			<div className={styles.resultsGrid}>
				{props.species.map((species, i) => {
					return <SpeciesSingle key={species.name} species={species} />
				})}
			</div>
		</>
	)
}