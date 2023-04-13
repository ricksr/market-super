import utils from "../helper/utils"

// import data  from '../static/data.json'
const {
    OPTIONS
} = utils

const data = [
    {
        id: 1,
        description: '',
        discountingStageOptions: [...OPTIONS],
        discountingStage: OPTIONS[0],   
        discountingStageId: '1',
        itemId: '',
        discount: '3-1',
        discountType: 'free'
    }, {
        id: 2,
        description: '',
        discountingStageOptions:  [...OPTIONS],
        discountingStage: '',
        discountingStageId: '',
        itemId: '',
        discount: '3-1',
        discountType: 'free'
    }
]

const discounts = {
    data
}

export default discounts