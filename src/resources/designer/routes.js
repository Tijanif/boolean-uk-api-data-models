const router = require('express').Router();

const { getAllDesigners } = require('./controller');

router.get('/', getAllDesigners);

module.exports = router;
