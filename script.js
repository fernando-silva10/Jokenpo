// Script do projeto Jokenpô

const result = document.querySelector(".resultado")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

/*
    humanScoreNumber -> Camel Case
    GAME_OPTIONS     -> Snake Case
*/

//  ENUMS
const GAME_OPTIONS = {
    PEDRA: "pedra",
    PAPEL: "papel",
    SCISSORS: "tesoura"
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ["pedra", "papel", "tesoura"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

    const playTheGame = (human, machine) => {
        console.log("Humano: " + human + "Máquina: " + machine)
    

        if(human === machine){
            result.innerHTML = "Deu empate"
        }
        else if (
            (human === "papel" && machine === "pedra") ||
            (human === "pedra" && machine === "tesoura") ||
            (human === "tesoura" && machine ==="papel")
        )
        {   
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
            result.innerHTML = "Você ganhou"
        }
        else {
            machineScoreNumber++
            machineScore.innerHTML = machineScoreNumber
            result.innerHTML = "Você perdeu para Alexa"
        }
    }   