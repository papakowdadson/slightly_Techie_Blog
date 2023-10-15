const db = require("../../config/db_config");
const createDb = (req,res)=>{
    let sql ="CREATE DATABASE IF NOT EXISTS blog_db";

    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log('create db result',result)
            res.send('Database created....');
        }
    })

}

module.exports = createDb;