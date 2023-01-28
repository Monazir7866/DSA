// You are given a 3 * 3matrix(2d-array) that represents the final situation of a Tic Tac Toe.

// Your task is to write a program that finds out the winner in case the match ended in a win. If the winner is 'x', printx.

// If the winner is 'o', printo.

// In case the match ended in a tie, printTie.
function ticTacToe(matrix){
    //write code here
    if(matrix[0][0]==matrix[0][1] && matrix[0][1]==matrix[0][2] && matrix[0][2]== "x"){
        console.log("x");
    }else if(matrix[0][0]==matrix[1][0] && matrix[1][0]==matrix[2][0] && matrix[2][0]== "x"){
        console.log("x");
    }else if(matrix[1][0]==matrix[1][1] && matrix[1][1]==matrix[1][2] && matrix[1][2]== "x"){
        console.log("x");
    }else if(matrix[2][0]==matrix[2][1] && matrix[2][1]==matrix[2][2] && matrix[2][2]== "x"){
        console.log("x");
    }else if(matrix[0][0]==matrix[1][1] && matrix[1][1]==matrix[2][2] && matrix[2][2]== "x"){
        console.log("x");
    }else if(matrix[0][1]==matrix[1][1] && matrix[1][1]==matrix[2][1] && matrix[2][1]== "x"){
        console.log("x");
    }else if(matrix[0][2]==matrix[1][1] && matrix[1][1]==matrix[2][0] && matrix[2][0]== "x"){
        console.log("x");
    }else if(matrix[0][2]==matrix[1][2] && matrix[1][2]==matrix[2][2] && matrix[2][2]== "x"){
        console.log("x");
   } else  if(matrix[0][0]==matrix[0][1] && matrix[0][1]==matrix[0][2] && matrix[0][2]== "o"){
        console.log("o");
    }else if(matrix[0][0]==matrix[1][0] && matrix[1][0]==matrix[2][0] && matrix[2][0]== "o"){
        console.log("o");
    }else if(matrix[1][0]==matrix[1][1] && matrix[1][1]==matrix[1][2] && matrix[1][2]== "o"){
        console.log("o");
    }else if(matrix[2][0]==matrix[2][1] && matrix[2][1]==matrix[2][2] && matrix[2][2]== "o"){
        console.log("o");
    }else if(matrix[0][0]==matrix[1][1] && matrix[1][1]==matrix[2][2] && matrix[2][2]== "o"){
        console.log("o");
    }else if(matrix[0][1]==matrix[1][1] && matrix[1][1]==matrix[2][1] && matrix[2][1]== "o"){
        console.log("o");
    }else if(matrix[0][2]==matrix[1][1] && matrix[1][1]==matrix[2][0] && matrix[2][0]== "o"){
        console.log("o");
    }else if(matrix[0][2]==matrix[1][2] && matrix[1][2]==matrix[2][2] && matrix[2][2]== "o"){
        console.log("o");
    } else{
        console.log("tie");
    }
}