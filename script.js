const eleNumbers = document.querySelector(".numbers");
const eleTimer = document.querySelector(".timer")
const randomNumbers = [];
const eleScore = document.querySelector(".score")
const eleRemembered = document.querySelector(".remembered")
let myNumbers = [];
let periodTimer = 5;
let score = 0;

let timerId = setInterval(timer, 1000)

buildArrayRandom (5, 1, 100);

eleNumbers.innerHTML = randomNumbers

setTimeout(addNumbers, (periodTimer * 1000) + 2000)



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function buildArrayRandom (quantity, min, max) {
    do {
        let random = getRandomIntInclusive(min, max);
        if (!randomNumbers.includes(random)) {
            randomNumbers.push(random);
        }
    } while (randomNumbers.length < quantity);
}

function hidden() {
    eleNumbers.classList.add("hidden")
    eleTimer.classList.add("hidden")
}

function timer () {
    if (periodTimer === 0) {
        hidden ()
        clearInterval(timerId)
    } else {
        eleTimer.innerHTML = periodTimer + " Second Left"
        periodTimer --;
    }
}

function addNumbers () {
    for (let i = 0; i < randomNumbers.length; i++) {
        let tmpNumber = parseInt(prompt("inserisci i numeri che ti ricordi:"))
        if (randomNumbers.includes(tmpNumber)) {
            score++
            myNumbers.push(tmpNumber)
        }
    }
    eleScore.classList.add("show")
    eleScore.innerHTML = "hai totalizzato " + score + " punti"
    eleRemembered.innerHTML = myNumbers
    eleRemembered.classList.add("show")
}