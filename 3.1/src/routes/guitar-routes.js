let guitars = require('./../data/guitar-repository');

let sendDetails = (id, res) => {
    let guitar = guitars.getById(id);

    if (!guitar) {
        res.sendStatus(404);
    }

    res.render('guitars/details', {guitar});
};

module.exports = (app) => {
    app.get('/guitars', (req, res) => {
        let id = req.query.id;

        if (id) {
            sendDetails(id, res);
        }

        res.render('guitars/index', {guitars: guitars.all()});
    });

    app.get('/guitars/:id', (req, res) => {
        sendDetails(req.params.id, res);
    });

};