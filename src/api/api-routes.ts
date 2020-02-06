let router = require('express').Router();
var TShirtController = require('./../tshirt/controller/tShirtController.ts');
var BoxController = require('./../box/controller/boxController.ts');

router.get('/', function (req, res) {
    res.json({
        status: 'Node Test its Working',
        message: 'Welcome to node test checkout the README on how to work the API!',
    });
});

router.route('/tshirt/:rfid')
    .get(TShirtController.getTshirt)
    .put(TShirtController.registerTshirt);

router.route('/tshirt/:rfid/history')
    .get(TShirtController.getTshirtLocationHistory);

router.route('/box/:rfid')
    .get(BoxController.getBox)
    .put(BoxController.registerBox);

module.exports = router;
