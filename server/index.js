var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');

var con = mysql.createConnection({
     database: "kproject",
     host    : "localhost",
     user    : "root",
     password: "Ivt173bam"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.use('/assets', express.static('public'));

app.post('/filterAuction', urlEncodedParser, (req,res) => {

});

app.post('/createAuctionNote', urlEncodedParser, (req, res) => {
     console.log(req.body);
     if(!req.body) return res.sendStatus(400);
     var query = 'INSERT INTO `аукционы` (дата, время, место, специфика) VALUES (STR_TO_DATE("' + req.body.date + '","%Y-%M-%D"),' + req.body.time + ',"' + req.body.place + '","' + req.body.specific + '")';
     console.log(query);
     con.query(query, (error, rows, fields) => {
          if(error) throw error;
               res.sendFile(__dirname + '/addAuction.html');
          });
});

app.post('/createItemNote', urlEncodedParser, (req, res) => {
     console.log(req.body);
     if(!req.body) return res.sendStatus(400);
     var query = 'INSERT INTO `аукционы` (дата, время, место, специфика) VALUES (STR_TO_DATE("' + req.body.date + '","%Y-%M-%D"),' + req.body.time + ',"' + req.body.place + '","' + req.body.specific + '")';
     console.log(query);
     con.query(query, (error, rows, fields) => {
          if(error) throw error;
               res.sendFile(__dirname + '/addAuction.html');
          });
});

app.post('/createSellerNote', urlEncodedParser, (req, res) => {
     console.log(req.body);
     if(!req.body) return res.sendStatus(400);
     var query = 'INSERT INTO `аукционы` (дата, время, место, специфика) VALUES (STR_TO_DATE("' + req.body.date + '","%Y-%M-%D"),' + req.body.time + ',"' + req.body.place + '","' + req.body.specific + '")';
     console.log(query);
     con.query(query, (error, rows, fields) => {
          if(error) throw error;
               res.sendFile(__dirname + '/addAuction.html');
          });
});

app.post('/createLootNote', urlEncodedParser, (req, res) => {
     console.log(req.body);
     if(!req.body) return res.sendStatus(400);
     var query = 'INSERT INTO `аукционы` (дата, время, место, специфика) VALUES (STR_TO_DATE("' + req.body.date + '","%Y-%M-%D"),' + req.body.time + ',"' + req.body.place + '","' + req.body.specific + '")';
     console.log(query);
     con.query(query, (error, rows, fields) => {
          if(error) throw error;
               res.sendFile(__dirname + '/addAuction.html');
          });
});

app.get('/menu/categories', (error,req, res) => {
     if(error) throw error;
     res.sendFile(__dirname + '/menuCategoriesAdd.html');
});

app.get('/createItemNote', (error,req,res) => {
     if(error) throw error;
     res.sendFile(__dirname + '/dataAdd/addItem.html');
});

app.get('/createSellerNote', (error,req,res) => {
     if(error) throw error;
     res.sendFile(__dirname + '/dataAdd/addSeller.html');
});

app.get('/createLootNote', (error, req,res) => {
     if(error) throw error;
     res.sendFile(__dirname + '/dataAdd/addLoot.html');
});

app.get('/createAuctionNote', (error, req,res) => {
     if(error) throw error;
     res.sendFile(__dirname + '/dataAdd/addAuction.html');
});

app.get('/menu', (error, req, res) => {
     if(error) throw error;
     res.sendFile(__dirname + '/menu.html');
});

app.get('/showAuctionNote', (req,res) => {
     con.query('SELECT * FROM `аукционы`', (error, rows, fields) => {
          if(error) throw error;
               res.render('tableAuctions', {arr: rows});
     });
});

app.get('/', (err,req,res) => {
     if(err) throw err;
     res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
     console.log('сервер запущен на порту 3000');
});
