const express = require('express')
const routes = express.Router()
const envio = require('../models/email')

routes.post('/', (req, res) => {
    console.log('enviando')
    envio.enviar()
})

routes.post("/sendMail", function (req, res, next) {
    envio.email(req.body)
});

module.exports = routes