var mongoose = require('mongoose');

var tShirtDTOSchema = mongoose.Schema({
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    rfid: {
        type: String,
        required: true
    },
    lastLocation: {
        type: String,
        required: true
    },
    pastLocations: [],
    create_date: {
        type: Date,
        default: Date.now
    }
});

var TShirtDto = module.exports = mongoose.model('tshirts', tShirtDTOSchema);
module.exports.get = function (callback, limit) {
    TShirtDto.find(callback).limit(limit);
}