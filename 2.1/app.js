let express = require('express');
let app = express();

const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index', {message: 'Hello, EJS!'});
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));