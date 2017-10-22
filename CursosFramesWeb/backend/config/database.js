const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://guilherme:IfBvLqkyleJ5viZs@dbfinance-shard-00-00-jzzoe.mongodb.net:27017,dbfinance-shard-00-01-jzzoe.mongodb.net:27017,dbfinance-shard-00-02-jzzoe.mongodb.net:27017/test?ssl=true&replicaSet=dbfinance-shard-0&authSource=admin', {
  useMongoClient: true,
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'."