const list = document.querySelector('ul')
const forEach = document.querySelector('.for-each')
const buttonMap = document.querySelector('.button-map')
const buttonReduce = document.querySelector('.button-reduce')
const buttonFilter = document.querySelector('.button-filter')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return newValue
}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach( product => {
    myLi = myLi + `
    <li>
    <img src = ${product.src}>
    <p>${product.name}</p>
    <p class="iten-price">${formatCurrency(product.price)}</p>
    </li>
    `
    })
    list.innerHTML = myLi
}

function mapAll() {
    const newPrices = menuOptions.map( product => ({
        ...product,
        price: product.price * 0.9,
}))

showAll (newPrices)
}

function reduceAll() {
    let newLi = ''
    const sum = menuOptions.reduce ( (acc, value) => {
        return acc + value.price
    },0);

        newLi = newLi + `
        <li>
        <p class="iten-price">O total de todos os hamburgueres é: ${formatCurrency(sum)}</p>
        </li>
        `
     list.innerHTML = newLi
}

function filterAll() {
    const vegan = menuOptions.filter( vegans => {
        if (vegans.vegan === true) return true
        else return false
    })

    showAll(vegan)
}

forEach.addEventListener('click', ()=> showAll(menuOptions))
buttonMap.addEventListener('click', mapAll)
buttonReduce.addEventListener('click', reduceAll)
buttonFilter.addEventListener('click', filterAll)