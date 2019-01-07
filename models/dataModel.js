var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    password: { type: String, default: 'Abc@123' },
    gender: { type: String },
    age: { type: String, default: 'N' },
    info: { type: String, default: 'N' },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("data", dataSchema);