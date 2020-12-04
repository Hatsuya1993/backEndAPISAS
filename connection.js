const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({
    path: './config.env',
})

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'nodemysql',
    multipleStatements: true
})

// Connect
db.connect((err) => {
    if(err){
        throw err
    }
    else{
        console.log("MySql Connected")
    }
})

module.exports = db