// You are given a matrix of size n x n. Find theNtraversal of the matrix. Refer the following for better understanding.
// input
// 1 2 3
// 4 5 6
// 7 8 9

// output
// 7 4 1 5 9 6 3

function nTraversal(matrix) {
    let bag="";
    let n=matrix.length;
    for(let i=n-1; i>=1; i--){
        for(let j=0; j<=n-1; j++){
            if(j===0){
            bag+=matrix[i][j]+" ";
            }
        }
    }
    for(let i=0; i<=n-1; i++){
        for(let j=0; j<=n-1; j++){
            if(i==j){
                bag+=matrix[i][j]+" ";
            }
        }
        
    }
    for(let i=n-2; i>=0; i--){
        for(let j=0; j<=n-1; j++){
            if(j==n-1){
            bag+=matrix[i][j]+" ";
            }
        }
    }
    
    console.log(bag);
  }
  