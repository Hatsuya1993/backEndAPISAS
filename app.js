const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const getAdmin = require('./routes/getAdmin')
const postAdmin = require('./routes/postAdmin')
const putAdmin = require('./routes/putAdmin')

const db = require('./connection')

app.use('/', getAdmin)
app.use('/', postAdmin)
app.use('/', putAdmin)


// Create DB
app.get("/createdb", (req, res) => {
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql, (err, result) => {
        if(err){
            throw err
        }
        else{
            console.log(result)
            res.send('Database created')
        }
    })
})

app.listen(3000, () => {
    console.log('Running on Port 3000')
})