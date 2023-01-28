// You are given an arraymatrixofnrows andmcolumns which contains positive integers and sums.

// You need to find occurrences of the sum of three consecutive numbers (i.e x,y, and z ) whose sum is equal to s appear horizontally, vertically and diagonally in the given matrix.
 
function twoArrayAndSum(n, m, matrix, s){
    //write code here
let count=0;
let sum;
for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        if(j<m-2){
            sum=matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]
            if(sum==s){
            count++
        }
    }
    
     if(i<n-2){
            sum=matrix[i][j]+matrix[i+1][j]+matrix[i+2][j]
            if(sum==s){
            count++
        }
    }
        if(i<n-2 && j<m-2){
        sum=matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2]
            if(sum==s){
            count++
        }
    }
          
          if(i>1 && j<m-2){
        sum=matrix[i][j]+matrix[i-1][j+1]+matrix[i-2][j+2]
            if(sum==s){
            count++
          }
       }
    }
    }
    console.log(count); 
  
}