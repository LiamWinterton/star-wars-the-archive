import Head from 'next/head'

import Header from '../components/Header'

export default function Home() {
	return (
		<>
			<Head>
				<title>Star Wars: The Archive</title>
				<meta name="description" content="A next.js site archiving information about various parts of the Star Wars universe!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
		</>
	)
}
