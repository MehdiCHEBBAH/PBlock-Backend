var mysql = require('mysql');


module.exports = {
    createConnection: () => {
        const con = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWD,
            database: process.env.MYSQL_DATABASE
          });
        
        con.connect((err) => {
          if(err){
            console.error(err);
            return;
          }
          console.log('Connection established');
        });
        
        return con;
    },
    closeConnection: (con) => {
        con.end((err) => {
          console.log("connection closed.")
        });
    }
}