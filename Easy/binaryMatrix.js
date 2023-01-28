// You are given a binary matrix of size N x M. A binary matrix is one which consists of only 1's and 0's. You have to flip the matrix. Flipping the matrix means converting all 1's to 0's and all 0's to 1's.

function binaryMatrix(N,M, matrix) {
    //write code here
    
    for(let i=0; i<N; i++){
        let bag="";
        for (let j=0; j<M; j++){
            
            if(matrix[i][j]==0){
                bag=bag+1+" ";
                
            }else if(matrix[i][j]==1){
              
                bag=bag+0+" ";
                
            }
            
        } console.log(bag);
        
    }
    
  }