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
function buscarUsuario (){
    //db.execSQLQuery("INSERT INTO techshot.`User`
}
function alterarUsuario (){
    //db.execSQLQuery("INSERT INTO techshot.`User`
}
function excluirUsuario (){
    //db.execSQLQuery("INSERT INTO techshot.`User`
}

module.exports = {
    buscarUsuarios,
    incluirUsuario,
    buscarUsuario,
    alterarUsuario,
    excluirUsuario
}