const axios = require('axios')

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'

export default function allPeople(props) {
	return (
		<Layout>
			<Section title="People">
			</Section>
		</Layout>
	)
}

export async function getStaticProps() {
	const { data } = await axios.get("http://localhost:3000/api/people/all")

	return {
		props: {
			people: data.results,
			count: data.count
		}
	}
}