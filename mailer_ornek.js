const http = require('http');
const fs = require('fs');
const url = require('url');
const mysql = require('mysql');

var nodemailer=require("nodemailer");

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodedb'
});

con.connect(function(err){
    if(err) throw err;
    console.log("Baglandi!");
})

http.createServer((req, res) => {
  fs.readFile('kayit_form.html', function (err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Dosyaniz Bulunamadi');
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  var bilgi = url.parse(req.url, true).query;

  if (bilgi.username && bilgi.password) {
    const sql = 'INSERT INTO user (username, password) VALUES (?, ?)';
    var values = [bilgi.username, bilgi.password];

    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log('1 Kayıt Oluşturuldu!');
    });

    var transporter = nodemailer.createTransport(
        { service: 'Outlook365', auth: {user: 'alamuttharameyn@outlook.com', pass: 'Xmg15plite99'}}
    )
    
    var mailOption = { from : 'alamuttharameyn@outlook.com', to: bilgi.username, subject: 'Tebrikler!!', text: 'şifreniz: ' +bilgi.password}
    
    
    transporter.sendMail(mailOption, function(err, info){
        if(err) throw err;
        console.log("Mail Gönderildi");
    })

    

  }
}).listen(8080);
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
