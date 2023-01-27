// Maximum Occurring Element 
// Description

// Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.

// If there are two elements present the maximum number of times, print the one which comes first in the array.


function maximumOccuringElement(A,N){
    //write code here
    let obj={};
    
    for(let i=0; i<=N-1; i++){
        let char=A[i];
        if(obj[char]===undefined){
            obj[char]=1;
        }else{
            obj[char]+=1;
        }
    }
    let bag="";
    let max= -Infinity;
    for(let key in obj){
        if(max<obj[key]){
            max=obj[key];
            bag=key;
        }
    }
    console.log(bag);
}
