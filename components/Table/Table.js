export default function Table(props) {
	const { data } = props

	const exclude = ["name", "url", "created", "edited", "homeworld", "films", "vehicles", "starships"]
	const entries = Object.entries(data).filter(entry => {
		return !exclude.includes(entry[0])
	})

	return (
		<table>
			<tbody>
				{entries.map((value, i) => {
					const property = new String(value[0][0].toUpperCase() + value[0].substring(1)).replace("_", " ")

					// Use length as it wont error on strings
					if(value[1].length !== 0) {
						return (
							<tr key={value[0]}>
								<td>{property}</td>
								<td>{value[1]}</td>
							</tr>
						)
					}

				})}
			</tbody>
		</table>
	)
}