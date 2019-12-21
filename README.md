# Database Configuration
+ We are using `MySQL` as a *Database Server*
+ and we are using a database called `pblock` that have to be present on the server (your machine) - create it as you want -
+ execute this query before you start (for example using `phpMyAdmin`)
```SQL
CREATE TABLE IF NOT EXISTS websites (
host_name varchar(255) NOT NULL,
category int NOT NULL,
probability float,
PRIMARY KEY (host_name)
);

CREATE TABLE IF NOT EXISTS words (
word varchar(50) NOT NULL,
category int NOT NULL,
PRIMARY KEY (word)
);
```


Some documentation is [here](https://www.sitepoint.com/using-node-mysql-javascript-client/)