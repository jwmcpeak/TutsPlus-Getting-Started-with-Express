let express = require('express');
let logger = require('./../logger');
let guitars = require('./../data/guitar-repository');
let router = express.Router();

router.use(logger);

let sendDetails = (id, res) => {
    let guitar = guitars.getById(id);

    if (!guitar) {
        res.sendStatus(404);
    }

    res.render('guitars/details', {guitar});
};

router.get('/', (req, res) => {
    let id = req.query.id;

    if (id) {
        sendDetails(id, res);
    }

    res.render('guitars/index', {guitars: guitars.all()});
});

router.get('/:id', (req, res) => {
    sendDetails(req.params.id, res);
});

module.exports = (app) => {
    app.use('/guitars', router);
};
