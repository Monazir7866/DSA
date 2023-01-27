// You are given an arrayarrof sizeN

// The value stored inNis always divisible by 3

// You have to divide the array into 3 parts, and find the sum of the first and the second part of the array

// For example, consider the value storedarr = [1 2 3 4 5 6], and the value ofN = 6

// Then, the three parts of the array will be[1,2], [3,4], [5,6]

function arrayParts(N,arr){
    
    let sum1=0;
    let sum2=0;
   
    let fd= N/3;
    
    for(let i=0; i<fd; i++){
        sum1+=arr[i];
    }
    for(let i=fd; i<fd*2; i++){
        sum2+=arr[i];
    }

    console.log(sum1+sum2);
}
