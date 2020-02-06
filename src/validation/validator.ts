const Joi = require('joi');

exports.validateRegisterTshirtRequest = function (registerTshirtRequest){
    const registerTshirtRequestSchema = {
         color : Joi.string().required(),
         size  : Joi.string().required(),
         label : Joi.string().required()
    }
    return Joi.validate(registerTshirtRequest, registerTshirtRequestSchema);
}

exports.validateRegisterBoxRequest = function (registerBoxRequest){
    const registerBoxRequestSchema = {
         tshirtRfids : Joi.array().required()
    }
    return Joi.validate(registerBoxRequest, registerBoxRequestSchema);
}

exports.validateTrackRfidRequest = function (trackRfidRequest){
    const trackRfidRequestSchema = {
         lastLocation : Joi.string().required()
    }
    return Joi.validate(trackRfidRequest, trackRfidRequestSchema);
}

