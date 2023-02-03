// Given a matrix of size n by n. Traverse and print the matrix in spiral form.

function spirallyTraversingAMatrix(N, matrix){
    let left=0;let right=N-1;let top=0;let bottom=N-1;let temp="";
    while(left<right && top<bottom){
        for(let i=left;i<=right;i++){
            temp+=matrix[top][i]+" ";
        }
        top++;
        for(let j=top;j<=bottom;j++){
            temp+=matrix[j][right]+" ";
        }
        right--;
        for(let k=right;k>=left;k--){
            temp+=matrix[bottom][k]+" ";
        }
        bottom--;
        for(let l=bottom;l>=top;l--){
            temp+=matrix[l][left]+" ";
        }
        left++;
    }
    console.log(temp);
  
}

