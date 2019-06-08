import db from '../../db';

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
function buscarTechshot (){
    
}
function alterarTechshot (){
    
}
function excluirTechshot (){
    
}
function buscarTechshotVotos (){
    
}
function incluirTechshotVoto (){
    
}

export default {
    buscarTechshots,
    incluirTechshot,
    buscarTechshot,
    alterarTechshot,
    excluirTechshot,
    buscarTechshotVotos,
    incluirTechshotVoto
}