import PersonSingle from "./PersonSingle"

import styles from './People.module.sass'

export default function People(props) {
	return (
		<div>
			<p className={styles.results}>Results: {props.count}</p>
			{props.people.map((person, i) => {
				return <PersonSingle key={person.name} person={person} />
			})}
		</div>
	)
}