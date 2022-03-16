const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    app.use(cors());
    next();
})
app.use(routes)

app.listen(port, () => {
    console.log(`Experss started http://localhost:5000`)
  })