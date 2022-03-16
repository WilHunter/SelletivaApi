const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const port = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.use(cors({
    origin: '*',
    header: 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
    methods: 'GET, POST, OPTIONS, PUT, DELETE'
}))

app.use(routes)

app.listen(port, () => {
    console.log(`Experss started http://localhost:5000`)
})