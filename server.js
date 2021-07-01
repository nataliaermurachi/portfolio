const path = require('path')

const express = require('express');
const app = express();

const sendEmail = require('./utils/sendemail');

app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('main')
});

app.get('/sent', (req, res) => {
    res.render('sent')
});

app.post('/sendemail', (req, res) => {
    const { fName, email, message } = req.body;
    const from = process.env.EMAIL; // sender from the sendgrid account
    const to = 'ermurachinatalia5@gmail.com';
    const subject = "New contact request";
    const output = `
      <p>You have a new Contact Request</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${fName}</li>
        <li>Email: ${email}</li>
        <li>Message: ${message}</li>
      </ul>
  `;
    sendEmail(to, from, subject, output);
    res.redirect('/sent')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running op port: ${PORT}`));