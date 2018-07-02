module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('home/index', {message: 'Hello, EJS!'});
    });
    
    app.get('/thanks', (req, res) => {
        res.render('home/index', {message: 'Thanks for sending us a message'});
    });
    
    app.get('/contact', (req, res) => {
        res.render('home/contact', {
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
            res.render('home/contact', {
                email,
                message,
                errors
            });
        }
    
        // process data
    
        res.redirect('/thanks');
    
    });
};