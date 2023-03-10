const mongoose = require('mongoose');
const users = require('../models/auth.js')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await users.find();
        const allUserDetails = []
        allUsers.forEach(user => {
            allUserDetails.push({ _id: user._id, name: user.name, about: user.about, tags: user.tags, joinedOn: user.joinedOn })
        })
        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
module.exports = { getAllUsers }
