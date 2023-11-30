/* player 1 {mark X}
player 2 {mark O}

addeventlistener click 
    if nombre mark X > nombre mark O 
        use mark O 
    else 
        use mark X
*/

let game = gameBoard();
/*let count = {};
for (let i in game){
    for (const element of game[i]) {
        count[element] = (count[element] || 0) + 1;
    }
    }
console.log(game)
console.log(count)*/

function selectMarker(nombre1, nombre2, board){
    let count = {};
    for (let i in game){
        for (const element of board[i]) {
        count[element] = (count[element] || 0) + 1;
        }
    }
        if (count[""] %2 !== 0){
            board[nombre1][nombre2] = "X";
        }else{
            board[nombre1][nombre2] = "O";
        }
    game = board;
    rule();
    console.log(game);
    console.log(count[""])
}

function rule(){
    /* conditions de victoire lignes
    [0][0],[0][1],[0][2] ; [1][0],[1][1],[1][2] ; [2][0],[2][1],[2][2]

    conditions de victoire colones
    [0][0],[1][0],[2][0] ; [0][1],[1][1],[2][1] ; [0][2],[1][2],[2][2]

    conditions de victoire diagonales
    [0][0],[1][1],[2][2] ; [0][2],[1][1],[2][0]
    */
    if (game[0][0] == "X" && game[0][1] == "X" && game[0][2] == "X"){
        console.log("win")
    }else if (game[1][0] == game[1][1] == game[1][2] == "X" || "O"){

    }
    /*
    i, j et k  = []
    i, j et k dans game pour concate 
    si i 
    */
}

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

function createPlayer(name, marker){
    return {name, marker}
}
const player1 = createPlayer("player1", "X");
const player2 = createPlayer("Player2", "O");

function activePlayer(){
    //while //board[] "" even => player1 
    //else player2
}



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