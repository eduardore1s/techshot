const automovelSchema = {
    "type": "object",
    "properties": {
      "marca": {
        "type": "string",
        "description": "Marca do automovel"
      },
      "modelo": {
        "$id": "#/properties/modelo",
        "description": "Modelo do automovel"
      },
      "placa": {
        "type": "string",
        "description": "Placa do automovel"
      },
      "ano": {
        "type": "integer",
        "description": "Ano do automovel"
      },
      "chassi": {
        "type": "string",
        "description": "Chassi do automovel"
      }
    }
  }

module.exports = {
    automovelSchema
}