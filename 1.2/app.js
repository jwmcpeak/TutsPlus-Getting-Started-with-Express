let express = require('express');
let app = express();

const port = 8000;

app.get('/', (req, res) => res.send('<b>Hello, Express!</b>'));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));