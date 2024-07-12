//tic-tac-toe
// We need a grid
// we need unique interactivity for the grid boxes
// we need to identify the players "x" and "o"
// we need to know whose turn it is
// we need to be able to start and end a game
// we need to know when a game has started
// we need to establish rules of the game


const theGrid = document.createElement("div")
const startButton = document.createElement("button")
let gameState = false
startButton.innerText = "start"
startButton.addEventListener("click", switchGameState)
theGrid.classList.add("grid")
const winningConditions = [
    [0, 1, 2], // each winning condition is an array in itself and it is an array of index positions
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const theBoxes = []
const playerOne = "X"
const playerTwo = "O"
let currentPlayer = "X"
let playCounter = 0

function switchGameState() {
    resetGame()
    gameState = true
}

class Box {
    constructor(){
        this.box = document.createElement("div")
        this.box.classList.add("box")
    }
}

function checkPlay(arr) { // expects an array
    let state = false // initializes state
    if(theBoxes[arr[0]].innerText != "" && theBoxes[arr[1]].innerText != "" && theBoxes[arr[2]].innerText != "") {
        if(theBoxes[arr[0]].innerText == theBoxes[arr[1]].innerText && theBoxes[arr[0]].innerText && theBoxes[arr[2]].innerText) {
            state = true            
        }
        return state
    }
    return state
}

function resetGame() {
    theBoxes.forEach(box => box.innerText = "")
}

function play() {
    if(!gameState) {
        return
    }
    if(this.innerText !== "") {
        return
    }
    this.innerText = currentPlayer
    const checkPlayConditions = winningConditions.map(checkPlay)
    // console.log("states: ", checkPlayConditions)
    const isWinFound = checkPlayConditions.find(condition => condition == true)
    console.log("Win found: ", isWinFound)
    if(isWinFound) {
        gameState = false
    }
    if(currentPlayer == playerOne) {
        currentPlayer = playerTwo
        return
    }
    currentPlayer = playerOne
}



function createGrid () {
    for(let i = 0; i < 9; i++) {
        const newBox = new Box()
        theBoxes.push(newBox.box)
    }

    theBoxes.forEach((box)=> {
        box.addEventListener("click", play)
        theGrid.appendChild(box)
    })

    document.body.appendChild(theGrid)
    document.body.appendChild(startButton)
}

createGrid()

// Assignment
// After a win, game should automatically reset the board after 30 seconds and console log "<X|O> is the winner"