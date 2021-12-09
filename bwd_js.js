// let myRecord = [];

// const calcArea = (x,y) => {
//     area = x * y;
//     result = {
//         "width": x,
//         "height": y,
//         area,
//     }
//     myRecord.push(result);
//     return area;
// }

let rate = {
    "usd": 1636,
    "sgd": 1933,
    "eur": 1203
}


function exchangeT0MMK(amount, currency){
    let calc = amount * rate[currency];
    return calc + " MMK";
}

function exchangeFromMMK(amount, currency){
    let calc = Math.round(amount / rate[currency]);
    return calc +" "+ currency;
}

let fruitPrice = {
    orange: 100,
    mango: 50,
    apple: 700
}

let record = [];

function calcTax(amount, percentage = 5){
    return (amount * 5 ) / 100;
}


function cost(fruit, qty){
    let calc = fruitPrice[fruit] * qty;
    console.log(calc)
    rec = {
        fruit: fruit,
        quatity: qty,
        cost: calc,
        tax: calcTax(calc),
        total: calc + calcTax(calc)
    };
    record.push(rec);

}
