# Dependencies
1. `node` and `npm` from [here](https://nodejs.org/en/)
2. `MySQL` from [here](https://dev.mysql.com/doc/refman/5.7/en/installing.html)

# Setup
```
$ git clone https://github.com/MehdiCHEBBAH/PBlock-Backend.git
$ cd PBlock-Backend
$ npm install
```
# Database Configuration
+ We are using `MySQL` as a *Database Server*
+ and we are using a database called `pblock` that have to be present on the server (your machine) - create it as you want -
+ execute the query located in `databaseService/CreateDB_Script.sql` before you start (for example using `phpMyAdmin`)



Some documentation is [here](https://www.sitepoint.com/using-node-mysql-javascript-client/)

# How to use the code
```
$ npm start
```

The server will be runing on `localhost:4000`:
+ To get the static website use `/`.
+ To know if a website is gatigorized **Pronography** use `/pblock/?q=exemple.com`
