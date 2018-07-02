let homeRoutes = require('./home-routes');
let guitarRoutes = require('./guitar-routes');


module.exports = (app) => {
    homeRoutes(app);
    guitarRoutes(app);
};