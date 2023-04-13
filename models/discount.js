import utils from "../helper/utils";
import objects from "../objects";

const discount = {
    generateDiscount
}

export default discount;

const {
    discounts,
    items,
    subCategories
} = objects

const {
    OPTIONS
} = utils

async function generateDiscount(data) {
    let billResp = {}
    let totalAmt = 0
    let itemLevelDiscounts = []
    let totalDiscount = 0

    data.map(it => {
        const { itemId } = it;
        // item belongs to which category and item belongs to which subcategory
        let sub_id;
        items.data.map(it => {
            if (it.id == itemId) sub_id = it.subCategoryId
        })
        let cat_id;
        subCategories.data.map(it => {
            if (it.id == sub_id) cat_id = it.categoryId
        })
        let itemDiscount = 0
        let discountType;
        discounts.data.map(it => {
            const { discountingStage, discountingStageId, discountingStageOptions, discount } = it;
            if (discountingStageId == itemId && itemDiscount == 0) {
                itemDiscount = discount
                discountType = it.discountType
            }
            if (discountingStageId == sub_id && itemDiscount == 0) {
                itemDiscount = discount
                discountType = it.discountType
            }
            if (discountingStageId == cat_id && itemDiscount == 0) {
                itemDiscount = discount
                discountType = it.discountType
            }
            // console.log('--disc--', itemDiscount, discountType)
        })
        itemLevelDiscounts.push({ ...it, itemDiscount, discountType })

        if (discountType == 'percentage') {
            totalDiscount += (Number(itemDiscount) * Number(it.itemPrice) * Number(it.quantity)) / 100
        } else if (discountType == 'free') {
            let cnt = 0
            let free = 0
            let tg = Number(it.quantity)
            let disc = itemDiscount.split('-')
            while (1) {
                // console.log('--',tg,cnt, disc[0])
                if (cnt >= tg) break;
                if (tg - cnt > Number(disc[0])) {
                    // console.log('---', tg-cnt)
                    cnt += Number(disc[0]);
                    cnt += Number(disc[1]);
                    free += Number(disc[1]);
                    // console.log('2---', tg-cnt,free)
                    if (cnt == tg) break;
                } else {
                    ++cnt;
                    if (cnt == tg) break;
                }
            }
            // console.log('||', (Number(it.itemPrice) * Number(it.quantity)))
            // console.log('|||', (Number(it.itemPrice) * (tg-free)))
            totalDiscount += (Number(it.itemPrice) * Number(it.quantity)) - (Number(it.itemPrice) * (tg - free))
            it.quantity = tg - free
        }

        totalAmt += Number(it.quantity) * Number(it.itemPrice)
    })
    return { itemLevelDiscounts, totalDiscount };
}