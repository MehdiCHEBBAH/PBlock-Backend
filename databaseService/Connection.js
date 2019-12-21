var mysql = require('mysql');


module.exports = {
    createConnection: () => {
        const con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: process.env.MYSQLPASSWD,
            database: 'pblock'
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
            //Do something when closing the connection
        });
    }
}