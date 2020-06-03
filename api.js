const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => res.send('<h1>FX Calendar API</h1>'))
app.listen(port, () => console.log(`FX Calendar API running on port ${port}`))