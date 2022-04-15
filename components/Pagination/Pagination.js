import Button from '../Button/Button'

export default function Pagination(props) {
	const { previous, next } = props

	return(
		<div>
			{previous &&
				<Button href={`${props.path}/${previous}`} text="Previous" />
			}
			{next !== false &&
				<Button href={`${props.path}/${next}`} text="Next" />
			}
		</div>
	)
}