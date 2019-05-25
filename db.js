Datastore = require('nedb');

const automoveisDB = new Datastore();

// Insere dados fictícios
obj1 = { "marca": "FORD", "modelo": "Fiesta", "placa": "HHB-3171", "ano": 2007, "chassi": "jdsdshb21hg21yg"};
obj2 = { "marca": "FIAT", "modelo": "Punto", "placa": "GUI-3423", "ano": 2019, "chassi": "4jbgdsbhb21hg21yg"};
obj3 = { "marca": "CHEVROLET", "modelo": "Onix", "placa": "HAE-3231", "ano": 2010, "chassi": "fjbbhb21hg21yg"};

function trataInsert(err, obj) { 
    if (!err) console.log (`Registro ${ obj._id } inserido`)
    else { console.log(`Erro ao inserir: ${ err.message }`) } 
};
automoveisDB.insert(obj1, trataInsert);
automoveisDB.insert(obj2, trataInsert);
automoveisDB.insert(obj3, trataInsert);

module.exports = {
    automoveisDB
}