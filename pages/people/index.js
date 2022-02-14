const axios = require('axios')

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'

export default function allPeople(props) {
	return (
		<Layout>
			<Section title="People" type="main">
				<p>Results: {props.count}</p>
			</Section>
		</Layout>
	)
}

export async function getStaticProps() {
	const { data } = await axios.get("http://localhost:3000/api/people/all")

	console.log(data.count)

	return {
		props: {
			people: data.results,
			count: data.count
		}
	}
}