import PersonSingle from "./PersonSingle"

export default function People(props) {
	return (
		<>
			<p>Results: {props.count}</p>
			<div>
				{props.people.map((person, i) => {
					return <PersonSingle key={person.name} person={person} />
				})}
			</div>
		</>
	)
}