import mongoose, { Schema } from 'mongoose'

const purchasesSchema = new Schema({
    amount: {
        type: String,
        required: [true, "Enter amount in KGS"]
    },
    price: {
        type: String,
        required: [true, "price is required!"]
    },
    expenses: {
        type: String,
        required: [true, "Enter total expenses in purchases"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const salesSchema = new Schema({
    amount: {
        type: String,
        required: [true, "Enter amount sold in KG"]
    },
    sales: {
        type: String,
        required: [true, "Enter sales"]
    },
    expenses: {
        type: String,
        required: [true, "Enter expenses"]
    },
    borrowers: [Object],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const profitSchema = new Schema({
    amountBought: {
        type: String,
    },
    amountSold: {
        type: String,
    },
    sales: {
        type: String,
    },
    purchases: {
        type: String,
    },
    profit: {
        type: String,
    },
    days: {
        type: String
    },
    borrowers: [Object],
    createdAt: {
        type: Date,
        default: Date.now
    }
})


export const profitModel = mongoose.models.PROFIT || mongoose.model('PROFIT', profitSchema)

export const PurchasesModel = mongoose.models.PURCHASES || mongoose.model('PURCHASES', purchasesSchema)

export const SalesModel = mongoose.models.SALES || mongoose.model('SALES', salesSchema)


