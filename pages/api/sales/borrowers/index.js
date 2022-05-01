import { SalesModel } from '../../../../models'
import CONNECTDB from '../../../../middleware/CONNECTDB'


export default async function handler(req, res) {

  const { method, body } = req
  const { id } = req.query

  // DB
  CONNECTDB()

  switch (method) {


    case "PATCH":
      try {

        await SalesModel.find()
          .then(doc => {
            doc[0].borrowers.push(body)
            doc[0].save(error => console.log(error))
            console.log("borrower saved to database");
            res.status(200).json(doc[0])
          })


      } catch (error) {
        res.status(400).json(error)
      }
      break;


    default:
      break;
  }

}


