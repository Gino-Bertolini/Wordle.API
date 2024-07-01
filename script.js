const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es"

fetch(API)
.then((response) =>{
    response.json()
    .then((data)=>{
        palabraSecreta = data[0].toUpperCase()
        console.log(palabraSecreta)
})}).catch((e) =>{
    console.log("ERROR")
})


let oportunidades = 6 

let button = document.getElementById("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")

button.addEventListener("click",enter)

function enter(){

    let intento = input.value.toUpperCase() 
    console.log(intento)
    if (intento == palabraSecreta){
        gameOver("Ganaste")

    }
    let row = document.createElement("div")
    row.className = "row"
    for (let i in palabraSecreta){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento[i]
        if (palabraSecreta[i] == intento[i]){
            letra.style.backgroundColor = "#9bfab0"
        }else if ( palabraSecreta.includes(intento[i])){
            letra.style.backgroundColor = '#FFD94D'
        }else{
            letra.style.backgroundColor = '#aaaaaa'
        }
        row.appendChild(letra)
    }
    grid.appendChild(row)
    oportunidades--
    if (oportunidades == 0){
        gameOver("Perdiste")
    }
}
function gameOver(mensaje){
    button.disabled = true
    input.disabled = true
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = "<h1>" + mensaje + "</h1>"
    
}