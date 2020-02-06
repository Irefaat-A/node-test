const TShirtDto = require('./../model/tShirtDto.ts');
const Validator = require('./../../validation/validator.ts');
const Joi = require('joi');

exports.registerTshirt = function (req, res) {

    const { error } = Validator.validateRegisterTshirtRequest(req.body);

    if(error) {
        console.log("Validation validateRegisterTshirtRequest triggered. WARN :: " + error.details[0].message);
        res.status(400).send(error.details[0].message);
        return;
    }

    TShirtDto.find({'rfid': req.params.rfid}, function (err, tshirtdto) {
        if (err){
            console.log("Unable to access the tshirts db. ERROR :: " + err);
            res.send(err);
        }

    if(!tshirtdto[0]){
         tshirtdto = new TShirtDto();
         tshirtdto.rfid = req.params.rfid;
         tshirtdto.lastLocation = 'Manufacturing warehouse';

         tshirtdto.color = req.body.color;
         tshirtdto.size = req.body.size;
         tshirtdto.label = req.body.label;

         tshirtdto.save(function (err) {
             if (err){
                 console.log("Unable to access the tshirts db. ERROR :: " + err);
                 res.json(err);
              return;
             }
             res.json({
                 message: 'Information about the t-shirt',
                 data: tshirtdto
             });
         });
         return;
     }
          res.json({
              message: 'Information about the t-shirt',
              data: tshirtdto
          });
   });
};

exports.getTshirt = function (req, res) {
    TShirtDto.find({'rfid': req.params.rfid}, function (err, tShirtDto) {
        if (err){
            console.log("Unable to access the tshirts db. ERROR :: " + err);
            res.send(err);
            return;
        }
        res.json({
            message: 'Information about the t-shirt',
            data: tShirtDto
        });
    });
};

exports.getTshirtLocationHistory = function (req, res) {
    TShirtDto.find({'rfid': req.params.rfid}, function (err, tShirtDto) {
        if (err){
            console.log("Unable to access the tshirts db. ERROR :: " + err);
            res.send(err);
            return;
        }
        res.json({
            message: 'Information about the t-shirt historical location',
            data: tShirtDto
        });
    });
};
