const axios = require('axios')

import { useRouter } from 'next/router'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'

export default function Person(props) {
	const router = useRouter()

	if(router.isFallback) {
		return (
			<Layout>
				<Section title="" type="main">
					<h2>Loading...</h2>
				</Section>
			</Layout>
		)
	}

	if(props.error) {
		return (
			<Layout>
				<Section title="404" type="main">
					<h2>The person you&apos;re looking for does not exist</h2>
				</Section>
			</Layout>
		)
	}

	const { person } = props

	const getRows = Object.entries(person).map((value, i) => {
		return (
			<tr key={i}>
				<td>{value[0]}</td>
				<td>{value[1]}</td>
			</tr>
		)
	})
	
	return (
		<Layout>
			<Head>
				<title>Star Wars: The Archive - {person.name}</title>
			</Head>
			<Section title={person.name.toLowerCase()} type="main">
				<table>
					<tbody>
						{getRows}
					</tbody>
				</table>
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
	const { params } = context

	let url = new URL(`https://swapi.dev/api/people/${params.id}/`)

	try {
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