// Given amatrixofRrows andCcolumns which contains distinct integers and you are given a integerKand you need to print both the diagonals crossing through the given elementK, you can always assume that the given element always exist in the matrix.

// image.png

// In this 4*4 Matrix, suppose we need to print the diagonals passing from11, So the output will be :

// 1 6 11 16

// 8 11 14

// Note: You need to print the diagonal from top to bottom also make sure you print the diagonals going fromleft to rightfirst then diagonal goingright to left,on a new lines.

function specificDiagonals(R, C, matrix, K){
    //write code here
    
    let bag="";
    let bag2="";
    let x,y;
    for(let i=0; i<=R-1; i++){
        for(let j=0; j<=C-1; j++){
            if(matrix[i][j]==K){
               x=i;
               y=j;
                break;
            }
        }
    }
    let diff=x-y;
    let sum=x+y;
    for(let i=0; i<=R-1; i++){
        for(let j=0; j<=C-1; j++){
            if(i-j==diff){
                bag+=matrix[i][j]+" ";
            }
           
        }
   }
   console.log(bag);
   for(let i=0; i<=R-1; i++){
        for(let j=0; j<=C-1; j++){
           if(i+j==sum){
                bag2+=matrix[i][j]+" ";
            }
        }
   }
   console.log(bag2);
}