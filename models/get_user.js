var conn = require('../db.config');

function get(id)
{
    sql= 'SELECT * FROM users';
    conn.query(sql,(err,res)=>
        {
            if(err) 
                return err;
            else 
                return res;
        })
}
module.exports = get