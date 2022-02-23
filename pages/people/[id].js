import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'
import People from '../../components/People/People'

import Pagination from '../../components/Pagination/Pagination'

const axios = require('axios')

export default function allPeople(props) {
	return (
		<Layout>
			<Head>
				<title>Star Wars: The Archive - People</title>
			</Head>
			<Section title="People" type="main">
				<People people={props.people} count={props.count} />
				<Pagination path="/people" previous={props.previous} next={props.next} />
			</Section>
		</Layout>
	)
}

export async function getStaticPaths() {
	const paths = []

	const { data } = await axios.get('https://swapi.dev/api/people/')

	const pages = Math.ceil(data.count / 10)

	for (let i = 1; i <= pages; i++) {
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

	let url = new URL('https://swapi.dev/api/people/')

	if(params.id) {
		url.searchParams.append("page", params.id)
	}

	const { data } = await axios.get(url.href)

	const previous = data.previous ? new URL(data.previous).searchParams.get("page") : false
	const next = data.next ? new URL(data.next).searchParams.get("page") : false

	return {
		props: {
			people: data.results,
			count: data.count,
			previous,
			next
		}
	}
}