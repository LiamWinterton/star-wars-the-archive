const axios = require('axios')

import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'

export default function Person(props) {
	const { person } = props

	return(
		<Layout>
			<Section title={person.name} type="main">

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

	let url = new URL(`https://swapi.dev/api/people/${params.id}/`)

	const { data } = await axios.get(url.href)

	console.log(data)

	const previous = data.previous ? new URL(data.previous).searchParams.get("page") : false
	const next = data.next ? new URL(data.next).searchParams.get("page") : false

	return {
		props: {
			person: data
		}
	}
}