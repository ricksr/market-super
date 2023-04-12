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
        discounts.data.map(it => {
            const { discountingStage, discountingStageId, discountingStageOptions, discount, } = it;
            if (discountingStageId == cat_id) itemDiscount = discount
            if (discountingStageId == sub_id) itemDiscount = discount
            if (discountingStageId == itemId) itemDiscount = discount
        })
        itemLevelDiscounts.push({ ...it, itemDiscount })
        totalAmt += Number(it.quantity) * Number(it.itemPrice)
    })
    return itemLevelDiscounts;
}