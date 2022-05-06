import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

const KEY = process.env.KEY

export default function (req: NextApiRequest, res: NextApiResponse) {

    if (!req.body) {
        res.statusCode = 404
        res.send("invalid credentials!")
        return
    }

    const { name, password } = req.body


    res.json({
         token: jwt.sign({
            name,
            user: name === process.env.SECRET_NAME && password === process.env.LOGIN_PWD
         }, KEY)
     }) 




}


