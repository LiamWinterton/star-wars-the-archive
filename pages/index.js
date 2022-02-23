import Head from 'next/head'

import Layout from '../components/Layout/Layout'
import Section from '../components/Section/Section'

import Features from '../components/Features/Features'

export default function Home() {
	return (
		<>
			<Head>
				<title>Star Wars: The Archive</title>
				<meta name="description" content="A next.js site archiving information about various parts of the Star Wars universe!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Section title="The History of Star Wars" content="content-small" type="center">
					<p>Cursus augue tincidunt blandit leo porttitor nunc etiam condimentum morbi. Posuere consectetur pretium malesuada sem nulla ultricies nunc. Maecenas gravida tortor egestas sollicitudin diam. Erat cursus lorem facilisi non, magnis in. Fringilla proin magna proin aliquet pellentesque eu hac eget ut. Ultricies amet mauris in aliquet fames dolor sit. Malesuada dictumst in ac, velit elit. Amet sit gravida non sapien, nulla a lacus viverra erat. Rhoncus laoreet aliquet facilisis pharetra tortor.</p>
				</Section>

				<Section title="upcoming features" type="center">
					<Features />
				</Section>
			</Layout>
		</>
	)
}
