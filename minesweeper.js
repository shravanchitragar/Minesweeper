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

let numberOfBombsPlaced = 0;

  while(numberOfBombsPlaced<numberOfBombs)
  {
    let randomRowIndex = Math.floor(Math.random()*numberOfRows);
    let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
    if(Bboard[randomRowIndex][randomColumnIndex]!=='B')
    {
      Bboard[randomRowIndex][randomColumnIndex] ='B';
      numberOfBombsPlaced++;
    }
    // Bboard[randomRowIndex][randomColumnIndex] ='B';


  }
  return Bboard;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex)=>{
  const neighborOffsets =[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset=>{
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if(neighborRowIndex>=0 && neighborRowIndex < numberOfRows && neighborColumnIndex >=0 && neighborColumnIndex <numberOfColumns)
    {
      if(bombBoard[neighborRowIndex][neighborColumnIndex]==='B')
      {
        numberOfBombs++;
      }
    }
  });

  return numberOfBombs;
};


//print function
const printBoard = (board)=>{
console.log(board.map(row => row.join(' | ')).join('\n'));
};



//flip functions
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex)=>{
  if(playerBoard[rowIndex][columnIndex]!==' ')
  {
    console.log("This tile is already flipped");
    return;
  }
  else if(bombBoard[rowIndex][columnIndex]==='B') {

    playerBoard[rowIndex][columnIndex]= 'B';

  }
  else {
    playerBoard[rowIndex][columnIndex]= getNumberOfNeighborBombs(bombBoard,rowIndex, columnIndex);
  }

};

let playerBoard  = generatePlayerBoard(3,3);
let BombBoard  = generateBombBoard(3,3,3);

console.log(printBoard(playerBoard));
console.log(printBoard(BombBoard));

flipTile(playerBoard, BombBoard, 1, 1);

console.log('Updated Player Board: ');

console.log(printBoard(playerBoard));
