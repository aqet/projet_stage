import { Connection } from "mysql";

const mysql = require('mysql');

const connection: Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recrutement"
});

export function executeQuery<TReturnType = any>(query: string): Promise<TReturnType> {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, res) => {
      if(err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
  })
}

export default connection;