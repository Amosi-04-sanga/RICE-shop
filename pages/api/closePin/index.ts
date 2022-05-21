import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

const KEY = process.env.KEY

export default function (req: NextApiRequest, res: NextApiResponse) {

    if (!req.body) {
        res.statusCode = 404
        res.json({msg:"invalid credentials!"})
        return
    }

    const { password } = req.body


    res.json({
         token: jwt.sign({
            user: password === process.env.CLOSE_PWD
         }, KEY, {expiresIn: "30d"})
     }) 


   console.log(process.env.CLOSE_PWD)

}

