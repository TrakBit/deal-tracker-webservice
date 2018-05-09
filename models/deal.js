/* eslint-disable */
import mongoose from 'mongoose';
/* eslint-enable */

const Schema = mongoose.Schema;

const DealSchema = new Schema({
    id: Number,
    name: String,
    amount: Number,
    stage: Number
})

/* eslint-disable */
export default mongoose.model('Deal', DealSchema);