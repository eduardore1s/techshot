const db = require('../../db');

function loginUsuario (login, senha, res){
    db.execSQLQuery(`SELECT Type_User FROM techshot.User 
    WHERE Email_User = '${login}' 
    and Password_User = '${senha}'`, res);
}

module.exports = {
    loginUsuario
}