const axios = require('axios')

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'
import Species from '../../components/Species/Species'

import Pagination from '../../components/Pagination/Pagination'

export default function allPeople(props) {
	return (
		<Layout>
			<Section title="Species" type="main">
				<Species species={props.species} count={props.count} />
				<Pagination previous={props.previous} next={props.next} />
			</Section>
		</Layout>
	)
}

export async function getServerSideProps(context) {
	let url = "http://localhost:3000/api/species"

	if(context.query.page) {
		url += `?page=${context.query.page}`
	}

	const { data } = await axios.get(url)

	return {
		props: {
			species: data.results,
			count: data.count,
			previous: data.previous,
			next: data.next
		}
	}
}