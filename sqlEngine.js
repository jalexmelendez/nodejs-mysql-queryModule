const mysql = require('mysql');
const conn = mysql.createPool({
    connectionLimit : "INTEGER_FOR_LIMIT",
    host : 'HOST_IP_ADDR',
    user : 'DATABASE_USERNAME',
    password : 'PASSWORD',
    database : 'DATABASE_NAME'
});

async function sqlEngine(sqlQuery) {
    let response = await sqlExec(sqlQuery);
    return response;
}

function sqlExec(sqlQuery) {
    return new Promise(function(resolve, reject) {
        try{
            conn.getConnection((err, connection) => {
                if (err) throw err;
                connection.query(sqlQuery, function (err, result) {
                    if (err) throw err;
                    resolve(result);
                    connection.release();
                })
            })
        } 
        catch{(err) =>{console.log(err);}}
    })
}

module.exports = sqlEngine;
