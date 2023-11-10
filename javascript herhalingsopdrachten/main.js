console.log("main.js is running...");

//opdr 1//
let x = 2000;
let salarisverhoging = 5;
let verhoging = x * salarisverhoging;
 
console.log("verhoging");
 
 
//opdr 2//
let huis = 400000;
let rente = 0.025;
let jaarlijks = huis * rente;
console.log("per jaar");
 
 
//opdr 3//
let prijs = 100;
let btw = 1.21;
let berekening = prijs * btw;
console.log("jas");
 
 
//opdr 4//
 
 
function askRandomName() {
    const userInputName = prompt('persoon;')
 
    if (userInputName == "Student") {
        alert('u bent een student');
    } else if (userInputName == 'Docent') {
        alert('u bent een docent');
    } else if (userInputName == 'Directeur') {
        alert('u bent een Directeur');
    } else {
        alert("");
    }
}
 
askRandomName();
 
 
//opdr 5//
 
let euro = prompt("Vul een bedrag in euro`s")
euro = Number(euro);
 
let cryptomarkt = prompt("Kies een crypto");
 
if(cryptomarkt === 'BTC') {
    result = (1 / 35050) * euro;
} else if(cryptomarkt === 'ETH') {
    result = (1 / 1887) * euro;
} else if(cryptomarkt === 'XRP') {
    result = (1 / 0.7) * euro;
} else if(cryptomarkt === 'DOG') {
    result = (1 / 0.07) * euro;
} else if(cryptomarkt === 'SOL')
result = (1 / 40.26) * euro;
 
 
 
 
 
 
//opdr 6//
for (let i = 0; i < 10; i++) {
    console.log('loop:', i)
 
}
 
console.log('Einde Programma');
 
 
//opdr 7//
 
counter = 0;
 
while (counter < 20) {
    counter++;
 
    console.log('print', counter);
 
    if (counter < 10)
 
        console.log('print', counter);
}
 
//opdr 8//
 
numbers = 0;
 
while (numbers  < 20) {
    numbers++;
 
    console.log('loop:', numbers)
 
    if (numbers > 9)
 
        break
}
 
 
//opdr 9//
 
let array = ['rood', 'groen', 'geel', 'blauwe', 'roze', 'tel'];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element !== 'tel') {
        const ulList = document.querySelector("ul");
        ulList.innerHTML += `${element}`;
    }
}
 
//opdr 10//
 
let addBtn = document.querySelector('.show-artists');
let artistName = ['Drake', 'Jay-Z', 'Rihanna', 'Central Cee', 'Cardi b']
addBtn.addEventListener('click', function () {
 
    document.querySelector('.display-artist').innerHTML = '<li>' + artistName + '</li>'
 
})
 
//opdr 11//
 
let userInputMessage = document.querySelector('.user-input')
let addMessBtn = document.querySelector('.add-message')
let removeMessage = document.querySelector('.clear-message')
let showUserMessage = document.querySelector('.add-user-message')
 
addMessBtn.addEventListener('click', function () {
    const inputMessage = userInputMessage.value;
 
    showUserMessage.innerHTML += inputMessage;
})
 
removeMessage.addEventListener('click', function () {
    showUserMessage.innerHTML = ' ';
})
 
 
 
//opdr 12//
 
function showMessage(message) {
    console.log(message);
}
 
showMessage('Bericht uit parameter');
 
 
//opdr 13//
 
function showSum(a, b) {
    let result = a + b;
    return result;
}
 
let sum = showSum(2, 3)
 
console.log('a + b = 5')
 
 
//opdr 14//
 
let arraysColor = ['rood', 'groen', 'geel', 'blauwe', 'roze', 'Wit', 'oranje', 'zwart'];
for (let i = 0; i < arraysColor.length; i++) {
    const element = arraysColor[i];
    if (element !== 'tel') {
        let showUserarrays = document.querySelector('.array-display')
        showUserarrays.innerHTML += `${ element }`;
    }
}
 
//opdr 15//
 
function getProduct(e, f) {
    let product = e * f;
    return product;
}
 
let multiply = getProduct(123456789, 9876543);
console.log('Dit is de product:', multiply);
 
//opdr 16//
 
let arrayOfNumbers = [1, 3, 5, 7, 11];
 
function getSumOfArray(numbersArray) {
    let total = 0;
 
    for (let sum of numbersArray)
        total += sum;
    return total
 
}
 
console.log(getSumOfArray(arrayOfNumbers));
 





//opdr 5
// let euros = prompt("Vul een bedrag in euro's");

// //string naar getal
// euros = Number(euros);

// let crypto = prompt("kies een crypto(BTC, ETH, etc...)");

// if(crypto === 'BTC') {
// result = (1/1887)* euros;
// console.log("bitcoins")
// }else if (crypto === 'ETH')
// {
// //berekening bitcoin

// }
// else if (crypto === 'XRP')
// {
// //berekening bitcoin
// }
// else if (crypto === 'DOG')
// {
// //berekening bitcoin
// }
// else if (crypto === 'SOL')
// {
// //berekening bitcoin
// }


