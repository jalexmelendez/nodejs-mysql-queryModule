# nodejs-mysql-queryModule

## Contents:

### 1.- Use case
This module does not require additional npm packages other than mysql connector.
You can either paste the code on a file on your project or download it.
It is used for *raw sql executions in mysql databases*.
This module uses connection pools and disposes them when the query has been completed.
You don't need to deal with annoying fatal errors like the connection beeing closed by the database.

### 2.- Requirements
node js
mysql (*npm install mysql*)

### 3.- Documentation
You don't have to do much to use this module, you just need to input your database credentials on the *conn* constant.
The entry point of this module is the function named "*sqlEngine*", which takes as argument a structured query string.
You can either use strings, formated strings or more advanced methods to build your queries.
Note that you should learn how to use async/await functions to have a good development experience.
You don't need to credit me to use this code.
You can find additional information on those links:
https://www.w3schools.com/nodejs/nodejs_mysql.asp
https://www.npmjs.com/package/mysql
https://javascript.info/async-await
