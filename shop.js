function getUpdateProductTotal(product, isAdd, price) {

    const productText = document.getElementById(product + '-input');
    var number = parseInt(productText.value);

    if (isAdd == true) {
        number += 1;
        productText.value = number;
    } else if (number > 0) {
        number -= 1;
        productText.value = number;
    }

    const totalText = document.getElementById(product + '-total');
    const currentTotal = price * number;
    totalText.innerText = currentTotal;

    culculateTotal();
}

function getInputValue(product) {
    const productText = document.getElementById(product + '-input');
    var number = parseInt(productText.value);
    return number;
}

function culculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('sub-tax').innerText = tax;
    document.getElementById('total-price').innerText = total;

}


document.getElementById('case-plus').addEventListener('click', function () {

    getUpdateProductTotal('case', true, 59);
})

document.getElementById('case-minus').addEventListener('click', function () {
    getUpdateProductTotal('case', false, 59);
})

document.getElementById('phone-plus').addEventListener('click', function () {
    getUpdateProductTotal('phone', true, 1219);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    getUpdateProductTotal('phone', false, 1219);
})

