// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro){
    return euro * oneEuroIs['USD']
}
function fromnDollarToYen(dollar){
    return (dollar / oneEuroIs['USD']) * oneEuroIs['JPY']
}
function fromYenToPound(yen){
    return (yen / oneEuroIs['JPY'])* oneEuroIs['GBP']
}

module.exports = { sum: sum,
     fromEuroToDollar: fromEuroToDollar,
     fromYenToPound: fromYenToPound,
     fromnDollarToYen: fromnDollarToYen };