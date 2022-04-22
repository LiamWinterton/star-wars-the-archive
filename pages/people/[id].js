import { useRouter } from 'next/router'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import Section from '../../components/Layout/Section'
import Results from '../../components/Results/Results'

import Loading from '../../components/Responses/Loading'
import Handle404 from '../../components/Responses/404'

const axios = require('axios')

export default function AllPeople(props) {
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

	const { people, count, previous, next } = props

	return (
		<Layout>
			<Head>
				<title>Star Wars: The Archive - People</title>
			</Head>
			<Section title="People">
				<Results
					results={people}
					archivePath="/people"
					singlePath="/person"
					imagePath="/assets/characters"
					count={count}
					previous={previous}
					next={next} />
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
		fallback: 'blocking'
	}
}

export async function getStaticProps(context) {
	try {
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
	} catch (error) {
		return {
			props: {
				error: true
			}
		}
	}
}