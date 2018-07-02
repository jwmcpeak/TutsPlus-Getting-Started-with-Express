let express = require('express');
let app = express();

const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded()); // application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.render('index', {message: 'Hello, EJS!'});
});

app.get('/thanks', (req, res) => {
    res.render('index', {message: 'Thanks for sending us a message'});
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        email: '',
        message: '',
        errors: []
    });
});

app.post('/contact', (req, res) => {
    let email = req.body.email.trim();
    let message = req.body.message.trim();
    let errors = [];

    if (!email) {
        errors.push('Please enter your email addresss');
    }

    if (!message) {
        errors.push('Please enter a message');
    }

    if (errors.length > 0) {
        res.render('contact', {
            email,
            message,
            errors
        });
    }

    // process data

    res.redirect('/thanks');

});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));