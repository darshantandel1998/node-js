const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'darshantandel0@gmail.com'
    }
});

transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
    let accessToken = userTokens[user];
    if(!accessToken){
        return callback(new Error('Unknown user'));
    }else{
        return callback(null, accessToken);
    }
});

/*

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'darshantandel0@gmail.com',
        pass: 'studio@987'
    }
});
*/
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

/*

var message = {
  from: "darshantandel0@gmail.com",
  to: "darshantandel1998@gmail.com",
  subject: "Fron Node.JS",
  text: "Plaintext version of the message",
  html: "<p>HTML version of the message</p>"
};

transporter.sendMail(message, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });*/