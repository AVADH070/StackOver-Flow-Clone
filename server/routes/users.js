const express = require('express')
const router = express.Router()
const { signup, login } = require('../controller/auth');
const { getAllUsers } = require('../controller/users');

router.post('/signup', signup)
router.post('/login', login)
router.get('/getAllUsers', getAllUsers)

module.exports = router