// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that squares each value in the array.  
// When the program is done x should have values that have been squared (e.g. [1, 25, 100, 4]).  
// You're not to use any of the pre-built function in Javascript.  
// You could for example square the value by saying x[i] = x[i] * x[i];

let square_the_array = (array) => {
    if (array.length > 0){
        for (let i = 0; i < array.length; i++){
            array[i] = array[i] * array[i];
        };
    };
    console.log(array);
};


square_the_array([1,5, 10, -2]);