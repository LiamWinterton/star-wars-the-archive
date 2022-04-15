import Image from 'next/image'

import styles from './Movies.module.sass'

export default function Movies(props) {
	const movieImages = props.movies.map(movie => {
		console.log(movie)
		const regex = /\/films\/(\d+)\//
		const result = regex.exec(movie)
	
		const id = parseInt(result[1])

		return (
			<Image key={id} src={`/posters/${id}.jpg`} width="491" height="768" alt="Movie Poster" />
		)
	})

	return (
		<div className={styles.movies}>
			{movieImages}
		</div>
	)
}