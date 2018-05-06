const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const router = express.Router();
const Deal = require('./models/deal')
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/crm';
const bodyParser = require('body-parser');
const app = express();

mongoose.connect(mongoDB);

router.get('/', (req, res) => {
    res.json({ message: 'Deal Tracker Application' });
});

router.route('/deals')
    // create a bear (accessed at POST http://localhost:8080/api/deals)
    .post((req, res) => {

        var deal = new Deal();
        deal.id = req.body.id;
        deal.name = req.body.name;
        deal.stage = req.body.stage;
        deal.amount = req.body.amount;

        // save the bear and check for errors
        deal.save((err) => {
            if (err)
                res.send(err);

            res.json({ message: 'deal created!' });
        });

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
