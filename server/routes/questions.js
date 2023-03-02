const express = require('express');
const { AskQuestion, getAllQuestion, deleteQuestion, voteQuestion } = require('../controller/questions.js');
const router = express.Router();
// const auth = require('../MiddleWare/auth')

router.get('/get', getAllQuestion)
// router.post('/Ask', auth, AskQuestion)
// router.delete('/delete/:id', auth, deleteQuestion)
// router.patch('/vote/:id', auth, voteQuestion)

router.post('/Ask', AskQuestion)
router.delete('/delete/:id', deleteQuestion)
router.patch('/vote/:id', voteQuestion)

module.exports = router;