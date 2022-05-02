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

                const sales = await SalesModel.findById(id)
                .then( doc => {
                    doc.borrowers[index].loan = doc.borrowers[index].loan - body.amount
                    doc.save( error => console.log(error) )
                })
                
                res.json(sales)
                    

            } catch (error) {
                res.status(400).json(error)
            }
            break;


        default:
            break;
    }

}


