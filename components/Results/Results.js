import ResultsList from './ResultsList'
import Pagination from '../Pagination/Pagination'

export default function Results(props) {
	const { results, count, singlePath, imagePath, previous, next } = props

	return (
		<div className="space-y-6 lg:space-y-12">
			<ResultsList results={results} count={count} imagePath={imagePath} singlePath={singlePath} />
			<Pagination path="/people" previous={previous} next={next} count={count} />
		</div>
	)
}