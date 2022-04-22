import Button from '../Button/Button'

export default function Pagination(props) {
	const { previous, next, count, path } = props

	return(
		<div>
			<p className="mb-6">Results: {count}</p>
			<div className="buttons">
				{previous &&
					<Button href={`${path}/${previous}`} text="Previous" />
				}
				{next !== false &&
					<Button href={`${path}/${next}`} text="Next" />
				}
			</div>
		</div>
	)
}