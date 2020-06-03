var conn = require('../db.config');

function create(User)
{
    conn.query('INSERT INTO users SET ?',User,(err,res)=>{
        if(err) throw err;
        console.log(res);
    })
}
module.exports = create;