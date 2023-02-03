// Given amatrixwithNrows andMcolumns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

// Look at the image for better understanding

// Image

// For example, for the above matrix, the required output would be as shown below.

// 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2.

function goInZigZag(N, M, matrix){
    //write code here
    let hor="";
    for(let i=0; i<N; i++){
        if(i%2==0){
        for (let j=M-1; j>=0; j--)
        
        hor= hor+(matrix[i][j]+" ");
        }
        else{
            for(let j=0; j<M; j++){
         hor=hor+(matrix[i][j]+" ");
    
    }
  
}
} console.log(hor);
}