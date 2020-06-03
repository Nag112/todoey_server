const mysql = require('mysql') ;
const db = require('./globals')
var dbConn = mysql.createConnection(db);
dbConn.connect((err)=>{
    if(err) throw err;
    console.log('db connection successfull');
});

module.exports=dbConn;