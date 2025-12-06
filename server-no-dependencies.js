const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const port = 3000

// CORS headers helper
const setCorsHeaders = (res) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

// Parse JSON body
const parseJsonBody = (req) => {
	return new Promise((resolve, reject) => {
		let body = ''
		req.on('data', chunk => {
			body += chunk.toString()
		})
		req.on('end', () => {
			try {
				resolve(body ? JSON.parse(body) : {})
			} catch (e) {
				reject(e)
			}
		})
	})
}

// Read tabs data
const getTabsData = () => {
	const tabsPath = path.join(__dirname, 'json', 'tabs.json')
	return JSON.parse(fs.readFileSync(tabsPath, 'utf8'))
}

const server = http.createServer(async (req, res) => {
	const parsedUrl = url.parse(req.url, true)
	const pathname = parsedUrl.pathname
	const query = parsedUrl.query

	// Handle CORS preflight
	if (req.method === 'OPTIONS') {
		setCorsHeaders(res)
		res.writeHead(200)
		res.end()
		return
	}

	setCorsHeaders(res)
	res.setHeader('Content-Type', 'application/json')

	try {
		// Serve static files
		if (pathname === '/' && req.method === 'GET') {
			// Try to serve index.html for root path
			const indexPath = path.join(__dirname, 'index.html')
			if (fs.existsSync(indexPath)) {
				res.setHeader('Content-Type', 'text/html')
				res.writeHead(200)
				res.end(fs.readFileSync(indexPath))
				return
			}
		}

		// API: GET / - return user data
		if (pathname === '/' && req.method === 'GET') {
			const data = {
				name: 'Lecarre',
				age: 21,
				description: 'faculty',
			}
			res.writeHead(200)
			res.end(JSON.stringify(data))
			return
		}

		// API: POST / - receive and process data
		if (pathname === '/' && req.method === 'POST') {
			const body = await parseJsonBody(req)
			const data = {
				success: body.id == 1 ? true : false,
				message:
					body.id == 1
						? 'Your information has been saved to the database'
						: 'Your information has not been saved to the database',
			}
			console.log('POST / - Received:', body)
			res.writeHead(200)
			res.end(JSON.stringify(data))
			return
		}

		// API: GET /department-public-work-highways
		if (pathname === '/department-public-work-highways' && req.method === 'GET') {
			const data = {
				plundered: 700000000,
				who: ['JR', 'Mark', 'AJ', 'Christian', 'Kat'],
			}
			console.log('GET /department-public-work-highways')
			res.writeHead(200)
			res.end(JSON.stringify(data))
			return
		}

		// API: GET /tab - return tab data based on query parameter
		if (pathname === '/tab' && req.method === 'GET') {
			const tabIndex = query.tab || 0
			const tabsData = getTabsData()
			res.writeHead(200)
			res.end(JSON.stringify(tabsData[tabIndex]))
			return
		}

		// Handle static files (js, css, etc)
		const filePath = path.join(__dirname, pathname)
		if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
			const ext = path.extname(filePath)
			const contentTypes = {
				'.js': 'application/javascript',
				'.json': 'application/json',
				'.html': 'text/html',
				'.css': 'text/css',
			}
			res.setHeader('Content-Type', contentTypes[ext] || 'text/plain')
			res.writeHead(200)
			res.end(fs.readFileSync(filePath))
			return
		}

		// 404 Not Found
		res.writeHead(404)
		res.end(JSON.stringify({ error: 'Not Found' }))
	} catch (error) {
		console.error('Server error:', error)
		res.writeHead(500)
		res.end(JSON.stringify({ error: 'Internal Server Error' }))
	}
})

server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
	console.log('Available endpoints:')
	console.log('  GET  http://localhost:3000/')
	console.log('  POST http://localhost:3000/')
	console.log('  GET  http://localhost:3000/department-public-work-highways')
	console.log('  GET  http://localhost:3000/tab?tab=0')
})
