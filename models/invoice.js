
const invoice = {
    generateBill,
    getFinalAmount
}

export default invoice;

async function generateBill(data) {
    let billResp = {}
    let totalAmt = 0

    data.map(it => {
        totalAmt += Number(it.quantity) * Number(it.itemPrice)
    })
    return totalAmt;
}

async function getFinalAmount(invoiceAmount, discountResp) {
    const { totalDiscount } = discountResp;
    return Number(invoiceAmount) - Number(totalDiscount)
}