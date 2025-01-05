const addProduct = () => {
    let productName = document.getElementById('product-name').value;
    let productQuantity = document.getElementById('product-quantity').value;

    console.log(productName, productQuantity);
    saveProductStorage(productName, productQuantity);
}

const getStroageCard = () => {
    let card = {};
    const stroageCard = localStorage.getItem('card');
    // let card = {};
    if (stroageCard) {
        card = JSON.parse(stroageCard);
    }
    return card;
}

const saveProductStorage = (product, quantity) => {
    const card = getStroageCard();
    card[product] = quantity;
    const cardStr = JSON.stringify(card);
    console.log(cardStr);
    localStorage.setItem('card', cardStr);
}