const axios = require('axios')

import { useRouter } from 'next/router'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'

import Loading from '../../components/Responses/Loading'
import Handle404 from '../../components/Responses/404'

export default function Race(props) {
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

	const { race } = props

	const getRows = Object.entries(race).map((value, i) => {
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
				<title>Star Wars: The Archive - {race.name}</title>
			</Head>
			<Section title={race.name.toLowerCase()} type="main">
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
	try {
		const { params } = context
	
		let url = new URL(`https://swapi.dev/api/species/${params.id}/`)

		const response = await axios.get(url.href)

		return {
			props: {
				race: response.data
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