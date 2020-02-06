const TShirtDto = require('./../tshirt/model/tShirtDto.ts');
const Validator = require('./../validation/validator.ts');
const Joi = require('joi');

exports.trackRfid = function (req, res){
    const { error } = Validator.validateTrackRfidRequest(req.body);

    if(error) {
        console.log("Validation validateTrackRfidRequest triggered. WARN :: " + error.details[0].message);
        res.status(400).send(error.details[0].message);
        return;
    }

    TShirtDto.find({'rfid': req.params.rfid}, function (err, tShirtDto) {
        if (err){
            console.log("Unable to access the tshirts db. ERROR :: " + err);
            res.send(err);
        }

    if(tShirtDto[0]){
         tShirtDto = tShirtDto[0];
         const lastLocation = req.body.lastLocation;
        if(lastLocation) {
            tShirtDto.pastLocations.push(lastLocation);
            tShirtDto.lastLocation = lastLocation;

         tShirtDto.save(function (err) {
             if (err){
                 console.log("Unable to access the tshirts db. ERROR :: " + err);
                 res.json(err);
              return;
             }
             res.status(204).send('Success, no information is sent back');
         });
         }
     }
   });
};
