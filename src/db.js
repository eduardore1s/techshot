function execSQLQuery(sqlQry, res){
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'root',
    database : 'techshot'
   /*host     : '127.0.0.1',
    port     : 54522,
    user     : 'azure',
    password : '6#vWHD_$',
    database : 'localdb'*/
  });

  connection.query(sqlQry, function(error, results, fields){
    if(error) 
      res.json(error);
    else
      res.json(results);
    connection.end();
    console.log('Query sql executada com sucesso!');
  });
}

module.exports = {
  execSQLQuery
}