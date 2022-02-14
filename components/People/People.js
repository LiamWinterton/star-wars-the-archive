import PersonSingle from "./PersonSingle"

export default function People(props) {
	console.log(props.people)

	return (
		<div>
			<p>Results: {props.count}</p>
			{props.people.map((person, i) => {
				return <PersonSingle key={person.name} person={person} />
			})}
		</div>
	)
}