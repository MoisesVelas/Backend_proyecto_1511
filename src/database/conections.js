// instanciar el mysql2 paquete
const mysql = require('mysql2/promise')
require('dotenv').config()

//crear la conexion

const conn = async (query, bindings = []) => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME
    });

    const [rows , fields] = await connection.execute(query, bindings)

    connection.destroy()  

    return [rows, fields]     
}

module.exports = conn;
