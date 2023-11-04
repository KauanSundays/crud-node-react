import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kauan@crescer1029qp",
    database: "crud"
})