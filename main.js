/* eslint-disable */
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/deals';
/* eslint-enable */

const PORT = process.env.PORT || 5000;
const mongoDB = 'mongodb://127.0.0.1/crm';
const app = express();

mongoose.connect(mongoDB);

router.get('/', (req, res) => {
    res.json({message: 'Deal Tracker Application'});
});

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app
    .use('/api', router)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT);
