import Image from 'next/image'
import Link from 'next/link'

import ImageContainer from '../Layout/ImageContainer'

export default function ResultsListItem(props) {
	const { item, baseUrl, imagePath } = props

	const regex = /\/(\d+)\//
	const result = regex.exec(item.url)

	const id = parseInt(result[1])

	return (
		<li>
			<Link href={`${baseUrl}/${id}`} passHref>
				<a className="block overflow-clip hover:underline">
					<div className="mb-3 rounded object-cover">
						<ImageContainer>
							<Image src={`${imagePath}/${id}.jpg`} className="hover:scale-110 transition-transform" layout="fill" alt={item.name} />
						</ImageContainer>
					</div>
					<p className="font-bold text-center text-2xl">{item.name}</p>
				</a>
			</Link>
		</li>
	)
}