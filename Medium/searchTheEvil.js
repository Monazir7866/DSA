// Christmas is around the corner, and the famous American paranormal investors, Ed and Lorraine Warren, are trying to clean their house. Because of their job, they have collected a lot of objects, which have the influence of a cruel soul in someway or another. Since, they are going to have a Christmas party at their house, they have decided to get rid of all the evil objects. They have given an integer ID to all the objects, and had kept them, in a matrix grid of size N X M.

// The grid has been protected by a special charm, such that the entire grid is sorted row wise, and column wise.

// They found all the objects, except for one object with ID "K". Since, they have to make arrangements for the party, they ask you to check, if the object with ID "K", can be found or not.

// Print "true", if the object can be found, else print "false".

// Note : Multiple objects may have the same ID.

// Expected Time Complexity -O (N + M)
//Enter code here
function searchTheEvil(r,c,mat,k){
    
    let flag=false;
    for(let i=0; i<r; i++){
        for(let j=0; j<c; j++)
        if(mat[i][j]==k){
            flag=true;
            break;
        }
    }
    console.log(flag);
}
function runProgram(input){
        input=input.trim().split("\n");
        var tc=+input[0];
        var line=1;
        for(let i=0; i<tc; i++){
            var [r,c]=input[line++].trim().split(" ").map(Number);
            var mat=[];
            for(let j=0;j<r; j++){
                mat.push(input[line++].trim().split(" ").map(Number));
            }
            var k=+input[line++];
            searchTheEvil(r,c,mat,k);
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