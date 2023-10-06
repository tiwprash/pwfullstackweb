const button = document.querySelector(".btn");
const hex = document.querySelector(".hex");

button.addEventListener("click", colourgenerator);

const hexrand = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];


function colourgenerator(){
    let hexcolour= `#`
    for (let index = 0; index < 6;index++){
      hexcolour += hexrand[generateRandomNumber()]
    }
    document.body.style.backgroundColor = hexcolour
    document.querySelector('.hex').textContent = hexcolour
}

function generateRandomNumber(){
    return Math.floor(Math.random()*hexrand.length)
}

