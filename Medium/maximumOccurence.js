// You are given an string of size N, of characters from 'a' to 'z'.

// You need to print maximum occurring character in that string. It is given that there is only 1 character which would be answer.

// [UseKey-Value pair based data structure]

//Enter code here
function maximumOccurence(size,str){
    let obj={};
    for(let i=0; i<size; i++){
        let char=str[i];
        if(obj[char]==undefined){
            obj[char]=1;
        }else{
            obj[char]++;
        }
    }
    let max=0;
    let res="";
    for(let key in obj){
        if(obj[key]>max){
            max=obj[key];
            res=key;
        }
    }
    console.log(res);
}
function runProgram(input){
        input=input.trim().split("\n");
        var tc=+input[0];
        var line=1;
        for(let i=0; i<tc; i++){
            var size=+input[line++];
            var str=input[line++].trim();
            maximumOccurence(size,str);
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