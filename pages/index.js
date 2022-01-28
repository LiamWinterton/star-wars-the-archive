import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Star Wars: The Archive</title>
				<meta name="description" content="A next.js site archiving information about various parts of the Star Wars universe!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			
		</div>
	)
}
