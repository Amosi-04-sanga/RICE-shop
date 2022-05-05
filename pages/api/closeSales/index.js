import { profitModel, PurchasesModel, SalesModel } from '../../../models'
import CONNECTDB from '../../../middleware/CONNECTDB'


export default async function handler(req, res) {

    const { method, body } = req

    // DB
    CONNECTDB()

    switch (method) {

        case "GET":

            try {

                const records = await profitModel.find({})

                if (!records) {
                    res.status(404).json({ message: "no data found" })
                }

                res.status(200).json(records)

            } catch (error) {
                res.status(404).json(error)
            }

            break

        case "POST":

            try {
                const profit = new profitModel(body)
                await profit.save()
                .then( () => {
                    console.log("record saved successfully!")
                })


                SalesModel.deleteMany()
                    .then(() => {
                        console.log("sales deleted successfully")
                    })
                    .catch(error => {
                        console.log(error)
                    })

                PurchasesModel.deleteMany()
                    .then(() => {
                        console.log("purchases deleted successfully")
                    })
                    .catch(error => {
                        console.log(error)
                    })


                res.status(201).json(profit)

            } catch (error) {
                res.status(400).json({ message: error.message })
            }


            break;


        default:
            break;
    }

}


