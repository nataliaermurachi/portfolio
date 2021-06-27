const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req, res) => {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.fName}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message,
        html: output
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})