// Given a matrix of dimension nxm. Find the count of distinct elements that occur in all the rows of the matrix.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains two integers n and m (1 ≤ n,m ≤ 100) — The dimensions of the matrix.

// The next n lines of each test case contain m integers (1 ≤ Aij ≤ 100) - The input matrix.


// Output
// For each test case, print the answer: The count of distinct elements.

function distinct(mat, r, c){
    let count=0;
    let store={};
    for(let i=0; i<r; i++){
        let store2={};
        for(let j=0; j<c; j++){
            store2[mat[i][j]]=1;
        }
        for(let key in store2){
            if(store[key]===undefined){
                store[key]=1;
            }else{
                store[key]+=1;
            }
        }
    }
    for(let key in store){
        if(store[key]==r){
            count++;
        }
    }
    console.log(count);
}
function runProgram(input){
    input=input.trim().split("\n");
    var tc= +input[0];
    var line=1;
    for(let i=0; i<tc; i++){
        var num=input[line].trim().split(" ").map(Number);
        var r= num[0];
        var c= num[1];
        line++;
        var mat=[];
        for(let j=0; j<r; j++){
            mat.push(input[line].trim().split(" ").map(Number));
            line++;
        }
        distinct(mat, r, c);
    }
    
}

if (process.env.USER === "") {
    runProgram(``);
} else {
        process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
        read += input;
  });
  process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}