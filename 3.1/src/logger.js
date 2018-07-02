let url = require('url');

module.exports = (req, res, next) => {
    let reqUrl = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
    });

    console.log(reqUrl);

    next();
};