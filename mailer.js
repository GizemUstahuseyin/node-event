
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(
    { 
        service: 'Outlook365', 
        auth: 
        {user: 'alamuttharameyn@outlook.com', 
        pass: 'Xmg15plite99'}}
);

var mailOption = { from : 'alamuttharameyn@outlook.com', to: '2000004309@stu.iku.edu.tr', subject: 'Node.js ile mail atıyorum.', text: 'Hello World!'}

transporter.sendMail(mailOption, function(err, info){
    if(err) throw err;
    console.log("Mail Gönderildi");
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';