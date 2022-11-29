const jwt = require('jsonwebtoken')
const SECRET_KEY = "msknjbjwxjnwdvcchevc";

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    try {
        const verified = jwt.verify(token, SECRET_KEY)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json({
            message :  'token salah'
        })
    }
}

module.exports = verifyToken