const wordKeys = require("./teste.env")
const client = require('@sendgrid/mail');
const axios = require('axios')

const sendgridApiKey = wordKeys.SENDGRID_API_KEY
const emailSendUrl = wordKeys.SEND_URL

module.exports.enviar = (dado) => {
    const mensagem = {
        personalizations: [
            {
                to: [
                    {
                        email: dado.envio, /* deve ser o e-mail da seguradora */
                        name: dado.para
                    },
                ],
                bcc: [
                    {
                        email: 'apoio02@selletvaseguros.com.br',
                        name: 'Selletiva Assessoria'
                    }
                ],
                dynamic_template_data: {
                    razaoSocial: dado.razaoSocial,
                    CNPJ: dado.CNPJ,
                    resp: dado.resp,
                    CPF: dado.CPF,
                    email: dado.para
                }
            }
        ],
        template_id: wordKeys.ID_TEMPLATE_SEGURADORA,
        from: {
            email: 'fale.wpi@gmail.com',
            name: 'Wilson Vitoriano'
        },

        attachments: [
            {
                content: 'PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==',
                filename: 'index.html',
                type: 'text/html',
                disposition: 'attachment'
            }
        ],
    };
    return axios({
        method: 'post',
        url: emailSendUrl,
        headers: {
            Authorization: `Bearer ${sendgridApiKey}`,
        },
        data: mensagem,
    })

}















/*
client
  .send(mensagem)
  .then(()=> console.log('Email enviado com Sucesso'))
  .catch(error =>{
    console.log(error)
  })

  module.exports = {
    client: client
  } */

