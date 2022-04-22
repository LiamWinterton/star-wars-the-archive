import Image from 'next/image'
import Link from 'next/link'

export default function ResultsListItem(props) {
	const { item, baseUrl, imagePath } = props

	const regex = /\/(\d+)\//
	const result = regex.exec(item.url)

	const id = parseInt(result[1])

	return (
		<li>
			<Link href={`${baseUrl}/${id}`} passHref>
				<a className="block">
					<div className="mb-3">
						<Image src={`${imagePath}/${id}.jpg`} layout="responsive" width={400} height={550} alt={item.name} />
					</div>
					<p className="font-bold text-center text-2xl">{item.name}</p>
				</a>
			</Link>
		</li>
	)
}