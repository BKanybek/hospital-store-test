export function calcSubPrice(equipment) {
    console.log(equipment, +equipment.count , +equipment.item.price, 'calcSub')
    return equipment.count * equipment.item.price
}

export function calcTotalPrice(equipments) {
    let totalPrice = 0;

    equipments.forEach(elem => {
        totalPrice += elem.subPrice
    })
    return totalPrice
}

export function getCountProductsInCart(){
    let cart = JSON.parse(localStorage.getItem('cart'))
    return cart ? cart.equipments.lenght : 0
}