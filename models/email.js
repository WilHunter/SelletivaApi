const nodemailer = require('nodemailer')
require('dotenv').config()
module.exports.email = async ( dado ) => {
      console.log(dado)
    let transporter = await nodemailer.createTransport({
        host: process.env.USER_SMTP,
        port: process.env.USER_PORT,
        secure: false,
        auth: {
            user: process.env.USER_MAIL,
            pass: process.env.USER_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let context = await transporter.sendMail({
        from: 'SELLETIVA ASSESSORIA <wildocpm@hotmail.com>',
        to: dado.envio,
        cc: 'apoio02@selletvaseguros.com.br',
        subject: 'Processo de Cadastro de Corretores - SELLETIVA ASSESSORIA',
        html: `
        <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

                <style>
                    h2 {
                        color: #834341;
                    }
                    .corpo{
                        font-size: 18px;
                        margin-top: 6em;
                        margin-bottom: 6em           
                    }
                    .dados{
                        font-size: 14px;
                        margin-top: 6em;
                        margin-bottom: 6em 
                    }
                </style>
            </head>

            <body>
                <div class="container-fluid text-center">
                    <h2>SELLETIVA ASSESSORIA</h2>
                </div>
                <div class="corpo">
                    Prezado(a)s <br><br>
                    Anexo fichas e documentos para cadastro da corretora, <br> 
                    por gentileza atrelar a grade da Selletiva assessoria.
                </div>
                <div class="dados mb-5">
                    <strong>RAZÃO SOCIAL:</strong>  ${dado.razaoSocial} <br>
                    <strong>CNPJ:</strong>  ${dado.CNPJ} <br><br> 
                    <strong>RESPONSAVEL:</strong>  ${dado.resp} <br>
                    <strong>CPF:</strong>  ${dado.CPF} <br>
                    <strong>E-MAIL:</strong>  ${dado.envio} <br>
                </div>
            </body>

            </html>
        `,
        /* attachments: dado.attachments */
    })
    console.log("Message sent: %s", context.messageId);
}
