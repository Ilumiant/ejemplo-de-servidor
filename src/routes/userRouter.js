var express = require('express');
const { getUsers, createUser, updateUser } = require('../controller/userController');
var router = express.Router();

router.get('/', getUsers);
router.post('/', createUser)
router.put('/:userId', updateUser)

module.exports = router;
