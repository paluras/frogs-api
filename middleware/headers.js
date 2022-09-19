const headers = (req, res, next) => {
	const origin = (req.headers.origin == 'https://sunflower-land.com')
	res.setHeader('Access-Control-Allow-Origin', origin)
	res.setHeader('Access-Control-Allow-Methods', 'GET')
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
}

module.exports = headers