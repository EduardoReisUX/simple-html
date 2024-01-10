/** @type {Array<{ id: string, name: string, price: string, img: string }>} */
const products = [
    { id: "1", name: "name 1", price: "19.90", img: "img 1" },
    { id: "2", name: "name 2", price: "29.90", img: "img 2" },
    { id: "3", name: "name 3", price: "39.90", img: "img 3" },
    { id: "4", name: "name 4", price: "49.90", img: "img 4" },
    { id: "5", name: "name 5", price: "59.90", img: "img 5" },
    { id: "6", name: "name 6", price: "69.90", img: "img 6" },
    { id: "7", name: "name 7", price: "79.90", img: "img 7" },
    { id: "8", name: "name 8", price: "89.90", img: "img 8" },
    { id: "9", name: "name 9", price: "99.90", img: "img 9" },
    { id: "10", name: "name 10", price: "109.90", img: "img 10" },
    { id: "11", name: "name 11", price: "119.90", img: "img 11" },
    { id: "12", name: "name 12", price: "129.90", img: "img 12" },
]

console.log("called")

const button = document.querySelector('button')

if (!button) {
    return
}

function handleOnClick() {
    const container = document.querySelector("#products")

    container.innerHTML = products.map(({id, img, name, price}) => `
    <div class="product">
        <img src=${img} alt=${img}></img>
        <p>${name}</p>
        <b>${name}</b>
        <i>R$ ${price}</i>
    </div>`)
}

button.addEventListener("click", handleOnClick)