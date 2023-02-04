// For last N days, you did nothing but eat, sleep and code.

// A close friend of you kept an eye on you for the last N days. For every single minute of the day, he kept track of your actions and prepared a log file.

// The log file contains exactly N lines, each line contains a string of length 1440 ( i.e. the number of minutes in 24 hours of the day).

// The string is made of characters E, S, and C only; representing Eat, Sleep and Code respectively. the ith character of the string represents what you were doing during the ith minute of the day.

// Your friend is now interested in finding out the maximum of the longest coding streak of the day - X.

// He also wants to find the longest coding streak of N days - Y.

// Coding streak means the number of C's without any E or S in between.

// See sample test case for clarification.

function codingStreak(mat,size){
    let max=0;
    let bag=mat.join("").trim();
    for(let i=0; i<size; i++){
        let count=0;
        let str=mat.join(" ");
        // console.log(str);
        for(let j=0; j<str.length; j++){
             if(str[j]=="C"){
                count++;
             }else{
                if(count>max){
                  max=count;
                 }
                 count=0;
             }
        }
    }
    let max2=0;
    let count=0;
       for(let j=0; j<bag.length; j++){
           if(bag[j]=="C"){
                count++;
             }
             else{
                if(count>max2){
                  max2=count;
                 }
                 count=0;
             }
       }
      console.log(max+" "+max2);
}
function runProgram(input){
        input=input.trim().split("\n");
        var size=+input[0];
        var mat=[];
        for(let i=1; i<=size; i++){
            mat.push(input[i].trim().split(" "));
        }
        codingStreak(mat,size);
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