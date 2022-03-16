const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()

app.use(express.json())
app.use(cors());
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
})
app.use(routes)

app.listen(2020, () => {
    console.log(`Experss started http://localhost:2020`)
  })