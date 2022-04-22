import ResultsListItem from "./ResultsListItem"

export default function ResultsList(props) {
	const { results, singlePath, imagePath } = props

	return (
		<ul className="results-grid">
			{results.map((result, i) => {
				return <ResultsListItem key={result.name} item={result} imagePath={imagePath} baseUrl={singlePath} />
			})}
		</ul>
	)
}