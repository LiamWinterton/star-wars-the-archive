import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'
import Species from '../../components/Species/Species'

import Pagination from '../../components/Pagination/Pagination'

const axios = require('axios')

export default function allSpecies(props) {
	return (
		<Layout>
			<Head>
				<title>Star Wars: The Archive - Species</title>
			</Head>
			<Section title="Species" type="main">
				<Species species={props.species} count={props.count} />
				<Pagination path="/species" previous={props.previous} next={props.next} />
			</Section>
		</Layout>
	)
}

export async function getStaticPaths() {
	const paths = []

	const { data } = await axios.get('https://swapi.dev/api/species/')

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

	let url = new URL('https://swapi.dev/api/species/')

	if(params.id) {
		url.searchParams.append("page", params.id)
	}

	const { data } = await axios.get(url.href)

	const previous = data.previous ? new URL(data.previous).searchParams.get("page") : false
	const next = data.next ? new URL(data.next).searchParams.get("page") : false

	return {
		props: {
			species: data.results,
			count: data.count,
			previous,
			next
		}
	}
}