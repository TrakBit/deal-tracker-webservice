const express = require('express');
const router = express.Router();
const Deal = require('../models/deal')

router.route('/deals')

.post((req, res) => {

    var deal = new Deal();
    deal.id = req.body.id;
    deal.name = req.body.name;
    deal.stage = req.body.stage;
    deal.amount = req.body.amount;

    deal.save((err) => {
        if (err)
            res.send(err);

        res.json({ message: 'deal created!' });
    });

});

module.exports = router;