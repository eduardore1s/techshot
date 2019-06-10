const db = require('../../db');

function buscarUsuarios (res){
     db.execSQLQuery('SELECT * FROM techshot.User;', res);
}
function incluirUsuario (req, res){
    const uuidv1 = require('uuid/v1');
    var usuario = req.body;
    db.execSQLQuery(`INSERT INTO techshot.User
    (Id_User, Name_User, Email_User, Password_User, Type_User)
    VALUES(
        '${uuidv1()}',
        '${usuario['nome']}',
        '${usuario['email']}',
        '${usuario['senha']}',
        '${usuario['tipo']}')`, res);
}
function buscarUsuario (idUsuario, res){
    console.log(idUsuario);
    db.execSQLQuery(`SELECT * FROM techshot.User 
    WHERE Id_User =  '${idUsuario}';`, res);
}
function alterarUsuario (req, idUsuario, res){
    var usuario = req.body;
    db.execSQLQuery(`UPDATE techshot.User
    SET Name_User='${usuario['nome']}',
    Email_User='${usuario['email']}',
    Password_User='${usuario['senha']}',
    Type_User='${usuario['tipo']}'
    WHERE Id_User='${idUsuario}';`, res);
}

function excluirUsuario (idUsuario, res){
    db.execSQLQuery(`DELETE FROM techshot.User 
    WHERE Id_User =  '${idUsuario}';`, res);
}

module.exports = {
    buscarUsuarios,
    incluirUsuario,
    buscarUsuario,
    alterarUsuario,
    excluirUsuario
}