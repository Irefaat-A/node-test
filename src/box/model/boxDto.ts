var mongoose = require('mongoose');

var boxDTOSchema = mongoose.Schema({
    tshirtRfids: {
        type: Array,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var BoxDTO = module.exports = mongoose.model('boxes', boxDTOSchema);
module.exports.get = function (callback, limit) {
    BoxDTO.find(callback).limit(limit);
}