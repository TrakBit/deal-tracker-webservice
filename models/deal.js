const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DealSchema = new Schema({
    id: Number,
    name: String,
    amount: Number,
    stage: Number
})

module.exports = mongoose.model('Deal', DealSchema)