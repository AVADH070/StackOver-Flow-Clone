const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user = require('../models/auth')


const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await user.findOne({ email })

        if (existingUser) {
            return res.status(404).json({ message: 'User already exist.' })
        }
        const hasePassword = await bcrypt.hash(password, 10);
        const newUser = await user.create({ name, password: hasePassword, email })
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", { expiresIn: '1h' })
        res.status(200).json({ result: newUser, token })
    } catch (error) {
        return res.status(500).json({ message: 'Somthing want wrong' })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await user.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({
                message: 'User does\'t exist.'
            })
        }

        const ispasswordCrt = await bcrypt.compare(password, existingUser.password)
        if (!ispasswordCrt) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "test", { expiresIn: '1h' })
        res.status(200).json({ result: existingUser, token })
    } catch (e) {
        return res.status(500).json({ message: 'Somthing want wrong' })
    }
}
module.exports = { signup, login }

