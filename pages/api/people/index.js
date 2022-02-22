const axios = require("axios")

export default async function handler(req, res) {
	const data = await axios.get("https://swapi.dev/api/people/?format=json")
		
	return res.status(200).json(data.data)
}