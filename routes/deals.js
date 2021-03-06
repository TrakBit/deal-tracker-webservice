/* eslint-disable */
import express from 'express';
import Deal from '../models/deal';
/* eslint-enable */

const router = express.Router();
router.route('/deals')

    .post((req, res) => {
        const deal = new Deal();
        deal.id = req.body.id;
        deal.name = req.body.name;
        deal.stage = req.body.stage;
        deal.amount = req.body.amount;

        deal.save((err) => {
            if (err) {
                res.send(err);
            }
            res.json({message: 'deal created!'});
        });
    })

    .get((req, res) => {
        Deal.find((err, deals) => {
            if (err) {
                res.send(err);
            }
            res.json(deals);
            return null;
        });
    })

    .delete((req, res) => {
        Deal.findByIdAndRemove(req.body._id, (err, deal) => {
            if (err) {
                res.send(err);
            }
            res.json(deal);
        })
    })

    .put((req, res) => {
        Deal.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, deal) => {
            if (err) {
                res.send(err);
            }
            res.json(deal);
        })
    });

/* eslint-disable */
export default router;