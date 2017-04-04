const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Ninja Schema
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory field']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});

//Create Ninja Model
const Ninja = mongoose.model('ninja',NinjaSchema);

//Export the Ninja Model
module.exports = Ninja;