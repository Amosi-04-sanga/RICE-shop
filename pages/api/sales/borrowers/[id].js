import { SalesModel } from '../../../../models'
import CONNECTDB from '../../../../middleware/CONNECTDB'


export default async function handler(req, res) {

    const { method, body } = req
    const { id, index } = req.query

    // DB
    CONNECTDB()

    switch (method) {


        case "PATCH":
            try {
               

            } catch (error) {
                res.status(400).json(error)
            }
            break;


        default:
            break;
    }

}


