let guitars = require('./../data/guitar-repository');

module.exports = (app) => {
    app.get('/guitars', (req, res) => {
        res.render('guitars/index', {guitars: guitars.all()});
    });

};