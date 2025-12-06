const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.static('.'))

// GET endpoint - returns basic user data
app.get('/', (request, response) => {
	console.log('GET / - Getting user data')
	response.json({
		name: 'Lecarre',
		age: 21,
		description: 'faculty',
	})
})

// POST endpoint - receives and processes data
app.post('/', (request, response) => {
	console.log('POST / - Received data:', request.body)
	const data = request.body
	response.json({
		success: data.id == 1 ? true : false,
		message:
			data.id == 1
				? 'Your information has been saved to the database'
				: 'Your information has not been saved to the database',
	})
})

// GET endpoint - returns department data
app.get('/department-public-work-highways', (request, response) => {
	console.log('GET /department-public-work-highways')
	response.json({
		plundered: 700000000,
		who: ['JR', 'Mark', 'AJ', 'Christian', 'Kat'],
	})
})

// GET endpoint - returns tab data based on query parameter
app.get('/tab', (request, response) => {
	const tab = request.query.tab
	const data = require('./json/tabs.json')
	response.json(data[tab])
})

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
