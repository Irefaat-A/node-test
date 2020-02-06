const Joi = require('joi');

exports.validateRegisterTshirtRequest = function (registerTshirtRequest){
    const registerTshirtRequestSchema = {
         color : Joi.string().required(),
         size  : Joi.string().required(),
         label : Joi.string().required()
    }
    return Joi.validate(registerTshirtRequest, registerTshirtRequestSchema);
}