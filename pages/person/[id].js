const axios = require('axios')

import { useRouter } from 'next/router'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Layout/Section'
import Table from '../../components/Table/Table'
import ResultsGrid from '../../components/Results/ResultsGrid'

import Loading from '../../components/Responses/Loading'
import Handle404 from '../../components/Responses/404'

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
			<Section title={person.name.toLowerCase()} type="main" size="small">
				<h2>Basic information</h2>
				<Table data={person} />
			</Section>
			<Section title="Movies" className="bg-gray-100">
				<ResultsGrid
					items={person.films}
					imagePath="/assets/films"
				/>
			</Section>
			<Section title="Ships">
				<ResultsGrid
					items={person.starships}
					imagePath="/assets/starships"
				/>
			</Section>
			<Section title="vehicles" className="bg-gray-100">
				<ResultsGrid
					items={person.vehicles}
					imagePath="/assets/vehicles"
				/>
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