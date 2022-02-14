const axios = require('axios')

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'
import People from '../../components/People/People'

export default function allPeople(props) {
	return (
		<Layout>
			<Section title="People" type="main">
				<People people={props.people} count={props.count} />
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