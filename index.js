const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const router = express.Router();
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/crm';

mongoose.connect(mongoDB);

router.get('/', (req, res) => {
    res.json({ message: 'Deal Tracker Application' });
});

express()
    .use('/api', router)
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT);
