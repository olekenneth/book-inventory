import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import routes from './routes';

export default (stockRepo) => {
    let app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    let logger = (req, res, next) => {
        console.log(new Date(), res.statusCode + ' ' + req.method + ' ' + req.url);
        next();
    };

    app.use(logger);

    let route = routes(stockRepo);

    app.get('/', function(req, res) {
        res.send('HELLO');
    });
    app.post('/stock', route.stockUp);
    app.get('/stock', route.getAll);
    app.get('/stock/:isbn', route.getCount);

    app.use((req, res, next) => {
        let error = new Error('No route');
        error.status = 404;
        next(error);
    });

    app.use((err, req, res) => {
        // console.error(err.stack);
        res.status(err.status || 500)
            .json(err.message);
        // .send(err.stack || 'Something broke!')
    });

    return app;
};
