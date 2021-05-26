function solve(input) {
  let matrix = input.map((row) => row.split(" ").map(Number)); //we parse matrix to numbers from string

  let sumFirstDiagonal = 0;

  for (let i = 0; i < matrix.length; i++) {//sum First Diagonal
    sumFirstDiagonal += matrix[i][i];
  }

  let sumSecondDiagonal = 0;
  for (let j = 0; j < matrix.length; j++) {//sum Second Diagonal
    sumSecondDiagonal += matrix[j][matrix.length - 1 - j];
  }

  if (sumFirstDiagonal == sumSecondDiagonal) {//check if they are equal
    for (let k = 0; k < matrix.length; k++) {//set elements to the sum of diagonals
      for (let z = 0; z < matrix.length; z++) {
        if (k != z && k != matrix.length - 1 - z) {
          matrix[k][z] = sumFirstDiagonal;
        }
      }
    }
    printMatrix(matrix);
  }
  else{
      printMatrix(matrix);
  }

  function printMatrix(matrix){
      for (let i = 0; i < matrix.length; i++) {
         console.log(matrix[i].join(' '));
          
      }
  }
}
console.log(solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
));
