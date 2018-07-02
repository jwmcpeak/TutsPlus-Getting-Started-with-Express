let express = require('express');
let app = express();
let logger = require('./logger');

app.set('view engine', 'ejs');

app.use(express.static('./public')); // this may or may not call next();
app.use(express.urlencoded()); // application/x-www-form-urlencoded; should call next();
app.use(logger); // should always call next

module.exports = {
    express: app,
    start() {
        const port = 8000;
        app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
    }
};