const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define the GeoSchema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type:[Number],
        index: "2dsphere"
    }
})
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
    },
    geometry: GeoSchema
});

//Create Ninja Model
const Ninja = mongoose.model('ninja',NinjaSchema);

//Export the Ninja Model
module.exports = Ninja;