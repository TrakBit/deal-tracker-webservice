/* eslint-disable */
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/deals';
import {username, password} from './user';
/* eslint-enable */

const PORT = process.env.PORT || 5000;
const mongoDB = `mongodb://${username}:${password}@ds161245.mlab.com:61245/heroku_9g243c05`;
const app = express();

mongoose.connect(mongoDB, (err) => {
    if (err) {
        console.log(err)
    } else {
        app.listen(PORT);
    }
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

router.get('/', (req, res) => {
    res.json({message: 'Deal Tracker Application'});
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app
    .use('/api', router)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
