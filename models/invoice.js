
const invoice = {
    generateBill
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