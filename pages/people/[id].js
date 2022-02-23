const axios = require('axios')

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'
import People from '../../components/People/People'

import Pagination from '../../components/Pagination/Pagination'

export default function allPeople(props) {
	return (
		<Layout>
			<Section title="People" type="main">
				<People people={props.people} count={props.count} />
				<Pagination path="/people" previous={props.previous} next={props.next} />
			</Section>
		</Layout>
	)
}

export async function getStaticPaths() {
	const { data } = await axios.get("http://localhost:3000/api/people/get-pages")

	const paths = []

	for (let i = 1; i <= data.pages; i++) {
		paths.push({
			params: {
				id: i.toString()
			}
		})
	}

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(context) {
	const { params } = context

	let url = "http://localhost:3000/api/people"

	if(params.id) {
		url += `?page=${params.id}`
	}

	const { data } = await axios.get(url)

	return {
		props: {
			people: data.results,
			count: data.count,
			previous: data.previous,
			next: data.next
		}
	}
}