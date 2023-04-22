const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const disciplinasSchema = new Schema({
    nome: { type: String, required: true, unique: true},
    cargahoraria: {type: Number, required: true},
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Disciplinas', disciplinasSchema);