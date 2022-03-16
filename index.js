const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const port = process.env.PORT || 3000
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

app.listen(port, () => {
    console.log(`Experss started http://localhost:5000`)
  })