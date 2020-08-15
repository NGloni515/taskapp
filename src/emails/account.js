const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'angelonischolar@gmail.com',
        subject: 'Haz sido hackeado con éxito',
        text: `Bienvenido a Hobson, ${name}. Gracias por unirte`,
        html: ''
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'angelonischolar@gmail.com',
        subject: 'Lo sentimos!!!',
        text: `Hasta luego, ${name}, esperamos tenerte de vuelta pronto`
    })
}

module.exports = {
    sendWelcomeEmail, 
    sendCancelationEmail
}
