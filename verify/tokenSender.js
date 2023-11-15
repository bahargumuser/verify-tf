const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const secure_configuration = require('./secure_configuration');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: secure_configuration.EMAIL_USERNAME,
        pass: secure_configuration.PASSWORD

    }
});

const token = jwt.sign({
    data: 'Token Data',
}, 'ourSecretKey' , { expiresIn: '10m'});

const mailConfigurations = {
    from: 'mrtwinklesharma@gmail.com',
    to: 'smtwinkle451@gmail.com',
    subject: 'Email Verification',
    text: `Hi! There, You have recently visited  
    our website and entered your email. 
    Please follow the given link to verify your email 
    http://localhost:3001/verify/${token}  
    Thanks`
};
transporter.sendMail(mailConfigurations, function(error, info) {
    if (error) throw Error(error); 
    console.log('Email Sent Successfully'); 
    console.log(info);
})