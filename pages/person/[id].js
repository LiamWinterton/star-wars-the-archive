const axios = require('axios')

import { useRouter } from 'next/router'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'

import Loading from '../../components/Responses/Loading'
import Handle404 from '../../components/Responses/404'
import Table from '../../components/Table/Table'

export default function Person(props) {
	const router = useRouter()

	if(router.isFallback) {
		return (
			<Loading />
		)
	}

	if(props.error) {
		return (
			<Handle404 />
		)
	}

	const { person } = props
	
	return (
		<Layout>
			<Head>
				<title>Star Wars: The Archive - {person.name}</title>
			</Head>
			<Section title={person.name.toLowerCase()} type="main">
				<Table data={person} />
			</Section>
		</Layout>
	)
}

export async function getStaticPaths() {
	const paths = []

	for (let i = 1; i <= 10; i++) {
		paths.push({
			params: {
				id: i.toString()
			}
		})
	}

	return {
		paths,
		fallback: 'blocking'
	}
}

export async function getStaticProps(context) {
	try {
		const { params } = context
	
		let url = new URL(`https://swapi.dev/api/people/${params.id}/`)

		const response = await axios.get(url.href)

		return {
			props: {
				person: response.data
			},
			revalidate: 60
		}
	} catch (error) {
		return {
			props: {
				error: true
			}
		}
	}
}