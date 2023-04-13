'use strict'

import basket from "./models/basket";
import discount from "./models/discount";
import invoice from "./models/invoice";

const {
    getItems
} = basket;

const {
    generateBill,
    getFinalAmount,
} = invoice;

const {
    generateDiscount
} = discount

let userBasket = await getItems({ name: "Anish Kumar", email: "random1@r1.com" })
let invoiceAmount = await generateBill(userBasket)
let disocuntResp = await generateDiscount(userBasket)
let finalAmount = await getFinalAmount(invoiceAmount, disocuntResp)

console.log('Total Amount - ', invoiceAmount)
console.log('Total Discount - ', disocuntResp.totalDiscount)
console.log('Final Amt - ', finalAmount)