import Button from '../Button/Button'

export default function Pagination(props) {
	const { previous, next, count } = props

	return(
		<div>
			<p className="mb-6">Results: {count}</p>
			<div className="buttons">
				{previous &&
					<Button href={`${props.path}/${previous}`} text="Previous" />
				}
				{next !== false &&
					<Button href={`${props.path}/${next}`} text="Next" />
				}
			</div>
		</div>
	)
}