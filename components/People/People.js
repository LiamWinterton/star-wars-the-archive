import PersonSingle from "./PersonSingle"

import styles from './People.module.sass'

export default function People(props) {
	return (
		<>
			<p className={styles.results}>Results: {props.count}</p>
			<div className={styles.resultsGrid}>
				{props.people.map((person, i) => {
					return <PersonSingle key={person.name} person={person} />
				})}
			</div>
		</>
	)
}