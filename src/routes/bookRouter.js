var express = require('express');
const { createBook } = require('../controller/bookController');
var router = express.Router();


router.post('/', createBook)

module.exports = router;
