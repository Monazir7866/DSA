// Description

// Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.

// input
// 1 2 3 
// 4 5 6
// 7 8 9
// output
// 7 4 1 2 3 6 9 8

function cirTraversal(matrix,N) {
    //write code here
        let bag="";
        
        for(let i=N-1; i>=1; i--){
            for(let j=0; j<=N; j++){
                if(j===0){
                    bag+=matrix[i][j]+" ";
                }
            }
        }
        for(let i=0; i<=N-1; i++){
            for(let j=0; j<=N-1; j++){
                if(i===0){
                    bag+=matrix[i][j]+" ";
                }
            }
        }
        for(let i=1; i<=N-2; i++){
            for(let j=0; j<=N-1; j++){
                if(j==N-1){
                    bag+=matrix[i][j]+" ";
                }
            }
        }
        for(let i=N-1; i<=N-1; i++){
            for(let j=N-1; j>=1; j--){
                if(i==N-1){
                    bag+=matrix[i][j]+" ";
                }
            }
        }
        console.log(bag);
     }
    