const express = require('express');
// const auth = require('../MiddleWare/auth')

const { postAnswer, deleteAnswer } = require('../controller/answer')

const router = express.Router();
// router.patch('/post/:id', auth, postAnswer);
// router.patch('/delete/:id', auth, deleteAnswer);
router.patch('/post/:id', postAnswer);
router.patch('/delete/:id', deleteAnswer);

module.exports = router
