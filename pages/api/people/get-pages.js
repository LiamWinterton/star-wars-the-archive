const axios = require("axios")

const perPage = 10
const url = new URL('https://swapi.dev/api/people/')

export default async function handler(req, res) {
	const { data } = await axios.get(url.href)

	const pages = Math.ceil(data.count / perPage)
		
	return res.status(200).json({
		pages: pages,
	})
}