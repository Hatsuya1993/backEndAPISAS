const db = require('../../connection')


function classs(idTeacher, name, classCode, callback) {

        let sql = "INSERT INTO class (idClassTeacher, name, classCode) VALUES (?, ?, ?)";
        
        db.query(sql, [idTeacher, name, classCode], (err, result) => {
            if (err) {
                return callback({
                    status: 400,
                    message: "Invalid syntax (sql) / Multiple data"
                })
            }
            return callback({
                status: 204,
                message: {
                    result,
                    update: "Added class data"
                }
            })
        })
}



module.exports = classs