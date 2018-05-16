/* eslint-disable */
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/deals';
/* eslint-enable */

const PORT = process.env.PORT || 5000;
const mongoDB = 'mongodb://trakbit:admin123@ds161245.mlab.com:61245/heroku_9g243c05';
const app = express();

mongoose.connect(mongoDB, (err) => {
    if (err) {
        console.log(err)
    } else {
        app.listen(PORT);
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
