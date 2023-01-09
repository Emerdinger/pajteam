const mongoose = require('mongoose');

const PajeroSchema = new mongoose.Schema({
    usuario: {type: String, require: true},
    pajas: {type: Number, default: 0}
}, { timestamps: true });

module.exports = mongoose.model("Pajero", PajeroSchema);