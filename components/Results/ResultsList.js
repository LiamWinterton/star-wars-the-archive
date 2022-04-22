import ResultsListItem from "./ResultsListItem"

export default function ResultsList(props) {
	const { results, singlePath, imagePath } = props

	return (
		<ul className="grid gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-5">
			{results.map((result, i) => {
				return <ResultsListItem key={result.name} item={result} imagePath={imagePath} baseUrl={singlePath} />
			})}
		</ul>
	)
}