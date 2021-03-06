// Given an array with multiple values (e.g. [-3, 3, 5, 7]), write a program that prints the maximum number in the array. 
// (The best way to do this is to have the computer go through each number, one at a time, and to update the value in a variable called 'maximum' (or whatever you want to name the variable);  
// imagine that if I gave you no number and asked you what a maximum number is.  
// What would you say?  Say the first number I gave you was -3 and asked you what a maximum number is.  
// What would you say? Say the next number I gave you was 3 and asked you again what a maximum number now is. 
// What would you say?  Have the computer imitate this behavior of updating the maximum number as you iterate through each number in the array).  
// Again you're not to use any of the pre-built functions 

let find_max = (array) => {
    if (array.length > 0){
        let max = array[0];
        for (let i = 1; i < array.length; i++){
            if (array[i] > max){
                max = array[i];
            }
        };
        console.log(max);
    };
};

find_max([-3, 33, 5, 7]);
find_max([1]);