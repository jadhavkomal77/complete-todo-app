const jwt = require("jsonwebtoken")

exports.useProtected = async (req, res, next) => {
    const token = req.cookies.auth
    if (!token) {
        res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_KEY, (error, decode) => {
        if (error) {
            return res.status(401).json({ message: "invalid token" })
        }
        req.user = decode._id
        next()
    })
}