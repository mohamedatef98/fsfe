const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'text/plain')
	res.send('Hello, World! Again!!')
})

app.listen(PORT, () => console.log('Server is running'))


