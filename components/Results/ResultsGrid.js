import Image from 'next/image'

export default function ResultsGrid(props) {
	const { items, imagePath } = props

	return (
		<ul className="results-grid">
			{items.map(item => {
				const regex = /\/(\d+)\//
				const result = regex.exec(item)
			
				const id = parseInt(result[1])
		
				return (
					<li key={id} className="image-container">
						<Image src={`${imagePath}/${id}.jpg`} layout="fill" alt="Movie Poster" />
					</li>
				)
			})}
		</ul>
	)
}