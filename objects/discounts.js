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
        discount: 10

    }, {
        id: 2,
        description: '',
        discountingStageOptions:  [...OPTIONS],
        discountingStage: '',
        discountingStageId: '',
        itemId: '',
        discount: 10
    }
]

const discounts = {
    data
}

export default discounts