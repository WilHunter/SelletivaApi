const express = require('express')
const routes = express.Router()
const enviaEmailSeguradora = require('../enviaEmailSeguradora')

routes.post('/',(req, res) =>{
  console.info(req.body)
})
routes.post('/enviaEmailSeguradora/:envio', (req, res) => {
  console.info(req.body)
    enviaEmailSeguradora.enviar(req.body)
    return {mensagem: 'Email enviado com sucesso'}
  })

  module.exports = routes