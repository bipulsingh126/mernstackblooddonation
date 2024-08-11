import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';


dotenv.config();

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split("")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json({
                message: "token is not valid"
            })
            req.user = user;
            next();
        })
    } else {
        res.status(401).json({
            message: " You are not authorized "
        })
    }
}


const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role === 'admin') {
            next();
        } else {
            res.status(403).json({
                message: "you are not admin"
            })
        }
    })
}


export {verifyToken, verifyTokenAndAuthorization};