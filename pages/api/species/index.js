const axios = require("axios")

const url = new URL('https://swapi.dev/api/species/')

export default async function handler(req, res) {
	const { page } = req.query

	if(page) {
		url.searchParams.append("page", page)
	}

	url.searchParams.append("format", "json")

	const data = await axios.get(url.href)
		
	return res.status(200).json(data.data)
}