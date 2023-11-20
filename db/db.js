//connect to mysql2
const mysql = require('mysql2/promise') 

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Jonayed@555',
//     database: 'student'
//   })

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Jonayed@555',
    database: 'student'
  })



module.exports = mysqlPool;
