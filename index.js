const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const router = require('./routes/deals');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/crm';
const bodyParser = require('body-parser');
const app = express();

mongoose.connect(mongoDB);

router.get('/', (req, res) => {
    res.json({ message: 'Deal Tracker Application' });
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app
    .use('/api', router)
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT);
