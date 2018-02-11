const generatePlayerBoard = (numberOfRows,numberOfColumns)=>{
  let board = [];
  for(let i =0; i<numberOfRows ; i++)
  {
    let row = [];
    for(let j = 0 ; j < numberOfColumns ; j++)
    {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs)=>{
  let Bboard = [];
  for(let i =0; i<numberOfRows ; i++)
  {
    let Brow = [];
    for(let j = 0 ; j < numberOfColumns ; j++)
    {
      Brow.push(null);
    }
    Bboard.push(Brow);
  }

//let numberOfBombsPlaced = 0;

  while(numberOfBombs>0)
  {
    let randomRowIndex = Math.floor(Math.random()*numberOfRows);
    let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
    Bboard[randomRowIndex][randomColumnIndex] ='B';
    numberOfBombs--;

  }
  return Bboard;
};

const printBoard = (board)=>{
console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard  = generatePlayerBoard(3,4);
let BombBoard  = generateBombBoard(3,4,5);

console.log(printBoard(playerBoard));



console.log(printBoard(BombBoard));
