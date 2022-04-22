const axios = require('axios')

import { useRouter } from 'next/router'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Layout/Section'
import Results from '../../components/Results/Results'

import Loading from '../../components/Responses/Loading'
import Handle404 from '../../components/Responses/404'

export default function AllSpecies(props) {
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

	const { species, count, previous, next } = props

	return (
		<Layout>
			<Head>
				<title>Star Wars: The Archive - Species</title>
			</Head>
			<Section title="Species">
				<Results
					results={species}
					archivePath="/species"
					singlePath="/race"
					imagePath="/assets/species"
					count={count}
					previous={previous}
					next={next} />
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
		fallback: 'blocking'
	}
}

export async function getStaticProps(context) {
	try {
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
	} catch (error) {
		return {
			props: {
				error: true
			}
		}
	}
}