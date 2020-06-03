const express = require('express')
const port = require('./globals')
const create_user = require('./models/create_user')
const get_user = require('./models/get_user')
var app = express();
app.use(express.urlencoded())
app.listen(port,()=>console.log('Server started at 3002'));
app.post('/user',(req,res)=>{
create_user(req.body)
res.send('done');
})
app.get('/user',(req,res)=>{    
    var rows = get_user(req.params);
    console.log(rows);
    rows.forEach((row) => {
        data.push(row);
    });
    var data;
    res.send(data);
    })
app.get('/',(req,res)=>{
    res.send('hello');
})