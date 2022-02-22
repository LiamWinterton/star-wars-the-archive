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

export async function getServerSideProps(context) {
	let url = "http://localhost:3000/api/people"

	if(context.query.page) {
		url += `?page=${context.query.page}`
	}

	const { data } = await axios.get(url)

	return {
		props: {
			people: data.results,
			count: data.count
		}
	}
}