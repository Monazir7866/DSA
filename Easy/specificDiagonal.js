// Given amatrixofRrows andCcolumns which contains distinct integers and you are given a integerKand you need to print both the diagonals crossing through the given elementK, you can always assume that the given element always exist in the matrix.

function specificDiagonals(R, C, matrix, K){
    //write code here
    let row;
    let col;
    
    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(matrix[i][j]==K){
                row=i;
                col=j;
            }
        }
    }
    
   let diff= row-col;
   let d1="";
    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(i-j==diff){
                d1=d1+matrix[i][j]+" ";
            }
        }
     } console.log(d1);
     
     let sum= row+col;
   let d2="";
    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(i+j==sum){
                d2=d2+matrix[i][j]+" ";
            }
        }
    }
    console.log(d2);
     
}