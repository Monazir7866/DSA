// Description

// Given a matrix of size n by n. Traverse and print the matrix in spiral form.


function spirallyTraversingAMatrix(N, matrix){
    //write code here
    
var row = N;
var currentRow = N; 
var column =N;
var currentColumn = N;
let bag="";

while(currentRow > row/2 ){

  // traverse row forward
  for(var i = (column - currentColumn);
  i < currentColumn ; i++) {
      bag+=(matrix[row - currentRow][i])+" ";
      }

  // traverse column downward
  for(var l = (row - currentRow + 1); l < currentRow ; l++) {
      bag+=(matrix[l][currentColumn - 1])+" ";
      }

  // traverse row backward
  for(var j = currentColumn - 1; j > (column - currentColumn) ; j--) {
     bag+=(matrix[currentRow - 1][j - 1])+" ";
     }

  // traverse column upward
  for(var k = currentRow - 1;k > (row - currentRow + 1) ; k--) {
      bag+=(matrix[k - 1][column - currentColumn])+" ";
      }

  currentRow--;
  currentColumn--;
}
console.log(bag);
}
