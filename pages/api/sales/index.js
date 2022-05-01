import { SalesModel } from '../../../models'
import CONNECTDB from '../../../middleware/CONNECTDB'

export default async function handler(req, res) {

  const { method, body } = req

  // DB
  CONNECTDB()

  switch (method) {

    case "GET":
      try {
        const sales = await SalesModel.find({})
        .catch( error => console.log(error) )

        res.status(200).json(sales)

      } catch (error) {
        res.status(404).json(error)
      }
      break;

    case "POST":
      try {

        const sales = new SalesModel(body)
        await sales.save()
          .then(res => {
            console.log(res)
          })

          res.status(201).json(sales)

      } catch (error) {
        res.status(400).json(error)
      }
      break;

    

    default:
      break;
  }

}


