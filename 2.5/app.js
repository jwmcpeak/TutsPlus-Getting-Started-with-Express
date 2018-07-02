let app = require('./src/init');
let routes = require('./src/routes/routes');


routes(app.express);

app.start();