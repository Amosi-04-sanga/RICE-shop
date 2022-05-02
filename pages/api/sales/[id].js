import CONNECTDB from '../../../middleware/CONNECTDB'
import { SalesModel } from '../../../models'



export default async function handler(req, res) {

    const { method, body } = req
    const { id } = req.query

    // DB
    CONNECTDB()

    switch (method) {

        // get specific sales
        case "GET":
            try {
                const sales = await SalesModel.findById(id)
                if (!sales) {
                    res.status(400).json({ message: "not found!" })
                }

                res.status(200).json(sales)

            } catch (error) {
                res.status(404).json(error)
            }
            break;


        case "PATCH":
            try {
                const purchases = await SalesModel.findById(id)
                    .then(doc => {
                        doc.amount = body.amount
                        doc.price = body.price
                        doc.expenses = body.expenses
                        doc.save(error => console.log(error))

                    })
                res.status(200).json(purchases)


            } catch (error) {
                res.status(4000).json(error)
            }
            break;


        default:
            break;
    }

}


