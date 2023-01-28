// You are given an array, stored in a variable with the namearray

// The size of the array is stored in a variable with the nameN

// You are also given another number stored in a variable with the nameK

// Print the output according to the following conditions

// 1. If the count of even elements in the array is greater than the value stored in K, print "Nice Array", without quotes

// 2. Else, print "Bad Array", without quotes

function niceArray(N, array, K) {
    //write code here
    let count=0;
    for(let i=0; i<array.length-1; i++){
        if(array[i]%2==0){
            count++;
        }
    } if(count>K){
        console.log("Nice Array");
    }else{
        console.log("Bad Array");
    }
    
    
  }