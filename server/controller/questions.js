const question = require('../models/questions')
const mongoose = require('mongoose')


const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = question({ ...postQuestionData })

    try {
        await postQuestion.save();
        res.status(200).json('Posted a question successfully')
    } catch (error) {
        res.status(409).json('Couldn\'t post a new question')
    }
}
const getAllQuestion = async (req, res) => {
    try {
        const questionList = await question.find();
        res.status(200).json(questionList);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const deleteQuestion = async (req, res) => {
    try {
        const { id: _id } = req.params;


        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send('question unavailable...');
        }
        await question.findByIdAndRemove(_id)
        res.status(200).json('Successfully deleted...');
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { value, userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...');
    }

    try {
        const questionR = await question.findById(_id)
        const upIndex = questionR.upVote.findIndex((id) => id === String(userId))
        const downIndex = questionR.downVote.findIndex((id) => id === String(userId))

        if (value === 'upVote') {
            if (downIndex !== -1) {
                questionR.downVote = questionR.downVote.filter((id) => id !== String(userId))
            }
            if (upIndex === -1) {
                questionR.upVote.push(userId)
            } else {
                questionR.upVote = questionR.upVote.filter((id) => id !== String(userId))
            }
        }
        else if (value === 'downVote') {
            if (upIndex !== -1) {
                questionR.upVote = questionR.upVote.filter((id) => id !== String(userId))
            }
            if (downIndex === -1) {
                questionR.downVote.push(userId)
            } else {
                questionR.downVote = questionR.downVote.filter((id) => id !== String(userId))
            }
        }
        await question.findByIdAndUpdate(_id, questionR)
        res.status(200).json({ message: "voted successfully..." })
    } catch (error) {
        res.status(404).json({ message: "id not found" })
    }
}
module.exports = { AskQuestion, getAllQuestion, deleteQuestion, voteQuestion }