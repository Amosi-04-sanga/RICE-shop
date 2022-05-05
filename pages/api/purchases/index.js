import { PurchasesModel } from '../../../models'
import CONNECTDB from '../../../middleware/CONNECTDB'


export default async function handler(req, res) {

  const { method, body } = req

  // DB
  CONNECTDB()

  switch (method) {

    case "GET":
      try {
        const purchases = await PurchasesModel.find({})
        if (!purchases) {
          res.status(400).json({ message: "no data found!" })
        }
        res.status(200).json(purchases)

      } catch (error) {
        res.status(404).json(error)
      }
      break;

    case "POST":
      try {

        const purchases = new PurchasesModel(body)
        await purchases.save()
          .then(res => {
            console.log(res)
          })
          res.status(201).json(purchases)


      } catch (error) {
        res.status(400).json(error)
      }
      break;

    case "PATCH":
      try {
        await PurchasesModel.find({})
          .then(doc => {
            doc.amount = body.amount
            doc.price = body.price
            doc.expenses = body.expenses
            doc.save(error => console.log(error))

            res.status(200).json(doc)
          })

      } catch (error) {
        res.status(400).json(error)
      }
      break;
      

    default:
      break;
  }

}



