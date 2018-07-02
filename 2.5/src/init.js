let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded()); // application/x-www-form-urlencoded

module.exports = {
    express: app,
    start() {
        const port = 8000;
        app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
    }
};