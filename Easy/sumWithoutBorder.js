// You are given a matrix of size n x m. Find the sum of all the elements of the matrix which do not lie at the border.


// Input
// The first line contains T, the number of test cases. The first line of each test case contains n and m, the matrix dimensions.

// Each of the next n lines contain m space separated integers, denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= n,m <= 1000

// 1 <= a[i][j] <= 1000


// Output
// Print a single integer, denoting the sum of all the elements of the matrix, which do not lie on the border, on a new line.

function sumWithoutBorders(N, M, matrix){
    //write code here
    let bag=0;
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            if(i>0 && j>0 && i<N-1 && j<M-1){
                bag+=matrix[i][j];
            }
        }
    }
    console.log(bag);
  
}