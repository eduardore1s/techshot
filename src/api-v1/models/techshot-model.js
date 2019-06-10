const db = require('../../db');

function buscarTechshots (res){
    db.execSQLQuery('SELECT * FROM techshot.Techshot;', res);
    
}
function incluirTechshot (req, res){
    const uuidv1 = require('uuid/v1');
    var techshot = req.body;
    db.execSQLQuery(`INSERT INTO techshot.Techshot
    (Id_Tec, Titulo_Tec, Descricao_Tec, Palestrante_Tec, CreatedBy_Tec, CreatedDate, IdCat_Tec)
    VALUES(
        '${uuidv1()}',
        '${techshot['titulo']}',
        '${techshot['descricao']}',
        '${techshot['palestrante']}',
        '${techshot['idUsuario']}',
        NOW(),
        '${techshot['idCategoria']}')`, res);
    
}
function buscarTechshot (idTechshot, res){
    db.execSQLQuery(`SELECT * FROM techshot.Techshot 
    WHERE Id_Tec =  '${idTechshot}';`, res);
}
function alterarTechshot (req, idTechshot, res){
    var techshot = req.body;
    db.execSQLQuery(`UPDATE techshot.Techshot
    SET Titulo_Tec='${techshot['titulo']}',
    Descricao_Tec='${techshot['descricao']}',
    Palestrante_Tec='${techshot['palestrante']}',
    IdCat_Tec='${techshot['idCategoria']}'
    WHERE Id_Tec='${idTechshot}'`, res);
    
}
function excluirTechshot (idTechshot, res){
    db.execSQLQuery(`DELETE FROM techshot.Techshot 
    WHERE Id_User =  '${idTechshot}';`, res);
    
}
function buscarTechshotVotos (idTechshot, res){
    db.execSQLQuery(`SELECT count(*) FROM techshot.Votacao
    WHERE IdTec_Vot ='${idTechshot}';`, res);
    
}
function incluirTechshotVoto (req, idTechshot, res){
    const uuidv1 = require('uuid/v1');
    var voto = req.body;
    db.execSQLQuery(`INSERT INTO techshot.Votacao
    (Id_Vot, IdTec_Vot, IdUser_Vot, CreatedDate)
    VALUES('${uuidv1()}', '${idTechshot}', 
    '${voto['idUsuario']}', NOW())`, res);
}

module.exports = {
    buscarTechshots,
    incluirTechshot,
    buscarTechshot,
    alterarTechshot,
    excluirTechshot,
    buscarTechshotVotos,
    incluirTechshotVoto
}