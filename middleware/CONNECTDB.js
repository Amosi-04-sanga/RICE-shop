import mongoose from 'mongoose'

//const url = process.env.MONGO_URI
 
const CONNECTDB = async () => {
    await mongoose.connect( process.env.MONGO_URI )
    .then( res => {
        console.log("successfully connected to DB!")
        
    })
    .catch( error => console.log(error) )
}

export default CONNECTDB
