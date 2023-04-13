import objects from "../objects";

const basket = {
    getItems
}

export default basket

const {
    userBaskets,
    items,
    itemsBought
} = objects;

async function getItems(data) {
    const { name = '', email = '' } = data;

    let itemsBoughtIds = userBaskets.data.reduce((prev, current) => {
        if (current.name == name && current.email == email) {
            prev = current.itemsBought
        }
        return prev
    }, [])
    let basket = [];
    itemsBoughtIds.map(it => {
        let pt = itemsBought.data.filter(it2 => {
            if (it2.id == it) {
                const { itemId, quantity } = it2
                let thisItem = items.data.filter(it3 => { if (it3.id == itemId) return it3 })
                basket.push({
                    quantity: quantity,
                    itemName: thisItem[0].name,
                    itemId: thisItem[0].id,
                    itemPrice: thisItem[0].price,
                    itemMetrice: thisItem[0].metrice,
                })
            }
        })
    })
    // console.log('--basket--', (basket));
    return basket
}