const BoxDto = require('./../model/boxDto.ts');
const Validator = require('./../../validation/validator.ts');
const Joi = require('joi');

exports.registerBox = function (req, res) {

    const { error } = Validator.validateRegisterBoxRequest(req.body);

    if(error) {
        console.log("Validation validateRegisterBoxRequest triggered. WARN :: " + error.details[0].message);
        res.status(400).send(error.details[0].message);
        return;
    }

    BoxDto.find({'tshirtRfids': req.params.rfid}, function (err, boxDto) {
        if (err){
            console.log("Unable to access the boxes db. ERROR :: " + err);
            res.send(err);
        }

    if(!boxDto[0]){
         boxDto = new BoxDto();

        if(req.body.tshirtRfids) {
            for(var rfid of req.body.tshirtRfids){
                boxDto.tshirtRfids.push(rfid);
            }
        }

         boxDto.save(function (err) {
             if (err){
                 console.log("Unable to access the boxes db. ERROR :: " + err);
                 res.json(err);
              return;
             }
             res.json({
                 message: 'Information about the box',
                 data: boxDto
             });
         });
         return;
     }
          res.json({
              message: 'Information about the box',
              data: boxDto
          });
   });
};

exports.getBox = function (req, res) {
    BoxDto.find({'tshirtRfids': req.params.rfid}, function (err, boxDto) {
        if (err){
            console.log("Unable to access the boxes db. ERROR :: " + err);
            res.send(err);
            return;
        }
        res.json({
            message: 'Information about the box',
            data: boxDto
        });
    });
};
