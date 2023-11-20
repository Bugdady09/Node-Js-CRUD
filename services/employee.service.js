const db = require('../db/db')

module.exports.getAllEmployees = async () => {
    const [rows] = await db.query('select * from student_data')
                        .catch(err => console.log(err)) 

    return rows;
}

module.exports.getEmployee = async (id) => {
    const [[row]] = await db.query('select * from student_data where id = ?' ,[id])
                        .catch(err => console.log(err)) 

    return row;
}

module.exports.deleteEmployee = async (id) => {
    const [ResultSetHeader] = await db.query('delete from student_data where id = ?' ,[id])
                        .catch(err => console.log(err)) 

    console.log('sevice', ResultSetHeader)

    return ResultSetHeader;
}


module.exports.addEmployee = async (obj) => {
    const result = await db.query('INSERT INTO student_data (name, marks) VALUES (?, ?)' ,[obj.name, obj.marks])
                        .catch(err => console.log(err)) 

    console.log('sevice', result)

    return result;
}

module.exports.updateEmployee = async (obj) => {
    const result = await db.query('UPDATE student_data SET name = ?, marks = ? WHERE id = ?' ,[obj.name, obj.marks, obj.id])
                        .catch(err => console.log(err)) 

    console.log('sevice', result)

    return result;
}