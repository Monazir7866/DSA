// Consider a maze represented using a grid consisting of n rows and m columns. The cell in the i-th row from the top and the j-th column from the left is defined (i,j).

// Every cell, except (n,m), has a direction assigned to it i.e either right or down (R and D respectively). If the matrix (i,j) is assigned direction R, anyone on that cell moves to the cell (i, j+1) and if it is assigned D, anyone on that cell moves to the cell (i+1, j).

// If at any moment, the moves make the person out of the maze, it is considered to be lost.

// There is an exit at the cell (n,m) from where everyone can exit. The cell (n,m) is assigned C for this reason. The maze is functional if and only if any person reaches the exit regardless of which cell it is placed in initially i.e, eventually end up in the cell (n,m). (Consider they do not go out of the maze in between and are not lost)

// The maze may not be functional initially. Determine the minimum number of changes to make it functional. The answer always exists.

// Check the sample input/output for more clarification.


function  Maze(matrix,N,M){
   
    let count = 0;
    for (let i = 0; i<N; i++) {
        if (matrix[i][M-1] !== "C"&& matrix[i][M - 1] === "R") count++;
    }

    for (let i = 0; i< M; i++) {
        if (matrix[N-1][i] !== "C"&& matrix[N - 1][i] === "D") count++;
    }

    return count;

}
function runProgram(input){
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(var i=0;i<tc;i++){
    var x=input[line].trim().split(" ").map(Number)
        var N=x[0]
        var M=x[1]
            line++;
        var matrix=[];
        for(var j=0;j<N;j++){
     matrix.push(input[line].trim().split(""))
            line++;
        
        }
      
        console.log(Maze(matrix,N,M))
    
    }
}
if (process.env.USERNAME === ""){ 	
    runProgram(``); 
} else { 	
    process.stdin.resume(); 	
    process.stdin.setEncoding("ascii"); 	
    let read = ""; 	
    process.stdin.on("data", function (input) { 		
    read += input; 	}); 	
    process.stdin.on("end", function () { 		
    read = read.replace(/\n$/, ""); 		
    read = read.replace(/\n$/, ""); 		
    runProgram(read); 	
    }); 	
    process.on("SIGINT", function () { 		
        read = read.replace(/\n$/, ""); 		
        runProgram(read); 		
        process.exit(0); 	
        
}); }