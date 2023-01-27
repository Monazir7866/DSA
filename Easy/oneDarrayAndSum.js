// You are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the nameN

// Each element of the string contains one of these symbols -'!', ']', '~'

// The symbols represent the following values

// ! -> 3
// ] -> 6
// ~ -> 9
// You have to find the sum of the string, such that for each symbol add the value of its corresponding values

// For example, consider the value stored inN = 6, and the value stored instr = !]!~]~

// Therefore, replacing each value with it's corresponding value, we get -363969

// Now, adding all these numbers, we get3 + 6 + 3 + 9 + 6 + 9 = 36, which is the required output

function characterSum(N, str){
	// write your code here
	let sum=0;
	for(let i=0; i<N; i++){
	    if(str[i]=="!"){
	        sum+=3;
	    }
	    else if(str[i]=="]"){
	        sum+=6;
	    }
	    else if(str[i]=="~"){
	        sum+=9;
	    }
	}
	console.log(sum);
}
