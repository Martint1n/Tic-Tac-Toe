
let game = gameBoard();

const player = {
    player1: "X",
    player2: "O",
    selectMarker(nombre1, nombre2, board, button){
        let count = {};
        for (let i in game){
            for (const element of board[i]) {
            count[element] = (count[element] || 0) + 1;
            }
        }
        if (button.innerHTML !== "X" && button.innerHTML !== "O"){
            if (count[""] %2 !== 0){
                board[nombre1][nombre2] = this.player1;
                button.innerHTML = `${this.player1}`
            }else{
                board[nombre1][nombre2] = this.player2;
                button.innerHTML = `${this.player2}`
            }
        }else {
        }
        game = board;
        console.log(game);
        console.log(count[""])
    },
    rule(){
        for (let row = 0; row < game.length; row++){
            if (game[row][0] == game[row][1] && game[row][1] == game[row][2] && game[row][2] !== ""){
                if (game[row][0] == "X"){
                    window.alert("winner");
                    this.reset();
                }else {
                    window.alert("winner O");
                    this.reset();
                }
            }else if (game[0][row] == game[1][row] && game[1][row] == game[2][row] && game[2][row] !== ""){
                if (game[0][row] == "X"){
                    window.alert("winner");
                    this.reset();
                }else {
                    window.alert("winner O");
                    this.reset();
                }
            }else if (game[row][row] == game[row+1][row+1] && game[row+1][row+1] == game[row+2][row+2] && game[row+2][row+2] !== ""){
                if (game[row][row] == "X"){
                    window.alert("winner");
                    this.reset();
                }else {
                    window.alert("winner O");
                    this.reset();
                }
            }else if (game[row][row+2] == game[row+1][row+1] && game[row+1][row+1] == game[row+2][row] && game[row+2][row] !== ""){
                if (game[row][row+2] == "X"){
                    window.alert("winner");
                    this.reset();
                }else {
                    window.alert("winner O");
                    this.reset();
                }
            }
        }
    },
    reset(){
        game = gameBoard();
        buttons.forEach(function(button){
            button.innerHTML = "" ;
        })
    }
}

const buttons = document.querySelectorAll(".test")
buttons.forEach(function(button) {
    button.addEventListener("click", () => {
        player.selectMarker(button.getAttribute("data-row"),button.getAttribute("data-column"),game, button);
        player.rule();
    })
});

    /* conditions de victoire lignes
    [0][0],[0][1],[0][2] ; [1][0],[1][1],[1][2] ; [2][0],[2][1],[2][2]

    conditions de victoire colones
    [0][0],[1][0],[2][0] ; [0][1],[1][1],[2][1] ; [0][2],[1][2],[2][2]

    conditions de victoire diagonales
    [0][0],[1][1],[2][2] ; [0][2],[1][1],[2][0]

    const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // colums
    [0, 4, 8],
    [2, 4, 6]
    ]

    const winningCombo = [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]], // rows
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]], // columns
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]],
    ]*/

    /*const winningComboDeux = {
        win1: [[[0][0]],[[0][1]],[[0][2]]],
        win2: [[[1][0]],[[1][1]],[[1][2]]],
        win3: [[[2][0]],[[2][1]],[[2][2]]], // rows
        win4: [[[0][0]],[[1][0]],[[2][0]]],
        win5: [[[0][1]],[[1][1]],[[2][1]]],
        win6: [[[0][2]],[[1][2]],[[2][2]]], // columns
        win7: [[[0][0]],[[1][1]],[[2][2]]],
        win8: [[[0][2]],[[1][1]],[[2][0]]], 
    }



    const testWin = [position]
    si les positions = entre elles et différeentes de "", alors win 

    if (game[0][0] == game[0][1] && game[0][1] == game[0][2] && game[0][2] == player1.marker ){
        console.log(player1.name, "win");
    }else if (game[0][0] == game[0][1] && game[0][1] == game[0][2] && game[0][2] == player2.marker ){
        console.log(player2.name, "win");


    }else if (game[1][0] ==  game[1][1] && game[1][1] == game[1][2] && game[1][2] == player1.marker){
        console.log("win");
    }else if (game[1][0] ==  game[1][1] && game[1][1] == game[1][2] && game[1][2] == player2.marker){
        console.log("win");

    }else if (game[2][0] == game[2][1] && game[2][1] == game[2][2] && game[2][2] == player1.marker){
        console.log("win");
    }else if (game[2][0] == game[2][1] && game[2][1] == game[2][2] && game[2][2] == player2.marker){
        console.log("win");
    
    }else if (game[0][0] == game[1][0] && game[1][0] == game[2][0] && game[2][0] == player1.marker){
        console.log("win");
    }else if (game[0][0] == game[1][0] && game[1][0] == game[2][0] && game[2][0] == player2.marker){
        console.log("win");
    
    }
    i, j et k  = []
    i, j et k dans game pour concate 
    si i 
    */

function gameBoard(){
    const rows = 3
    const columns = 3
    const board = [];

    for (let row = 0; row < rows; row++) {
        board[row] = [];
        for (let column = 0; column < columns; column++) {
            board[row].push(""); // changer de player (tours)
        }
        /*board[0][2] = "X"
        for (const element of board[i]) {
            count[element] = (count[element] || 0) + 1;
        }*/
    }
    return board
    /*for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            for (const element of board[j]) {
                count[element] = (count[element] || 0) + 1;
                }
            if (count[""] %2 !== 0 ) {
                board[i][j] = "X";
                for (const element of board[j]) {
                    count = {}
                    count[element] = (count[element] || 0) + 1;
                }
            }else {
                board[i][j] = "O";
                for (const element of board[j]) {
                    count = {}
                    count[element] = (count[element] || 0) + 1;
                }
            }
        }
    }  */
            /*for (let j = 0; j < board.length; j++) {
            if (count[""] %2 !== 0 ) {
                board[j] = "X";
            }else {
                board[j] = "O";
            }
        }*/
}

/*const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

const count = arr.reduce((accumulator, value) => {
    return {
    ...accumulator,
    [value]: (accumulator[value] || 0) + 1,
    };
}, {});



const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

const count = {};

for (const element of arr) {
    count[element] = (count[element] || 0) + 1;
}



// 👇️ { one: 3, two: 2, three: 1 }
console.log(count);

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);*/


/*function createPlayer(name, marker){
    this.name = name
    this.marker = marker
}

const player1 = new createPlayer("Player1", "X")
const player2 = new createPlayer("Playerr2", "O")*/

/*function cell(){
    let value = 0
    const addToken = (player) => {
        value = player ;
        const getValue = () => value;

        return {
            addToken,
            getValue
        }
    }
}*/

/*
function selectMarkerTest(nombre1, nombre2, board){
    let count = {};
    for (let i in game){
        for (const element of board[i]) {
        count[element] = (count[element] || 0) + 1;
        }
    }
        if (count[""] %2 !== 0){
            board[nombre1][nombre2] = player1.marker;
        }else{
            board[nombre1][nombre2] = player2.marker;
        }
    game = board;
    rule();
    console.log(game);
    console.log(count[""])
}

const btn = document.querySelectorAll("tic")

btn.addEventListener("click", () => {

})*/