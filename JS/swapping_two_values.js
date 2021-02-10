// Write a program that takes an array of numbers and returns an array where the first and last numbers in the array have been switched.
// For example say x = [2, 3, 5, 7, 6]. By the end of the program x, should be [6, 3, 5, 7, 2]. Do this without creating an empty array.


let swapping_two_values = (array) => {
    if (array.length > 1){
        let temp = array[0];
        array[0] = array[array.length - 1];
        array[array.length - 1] = temp;
    };
    return array;
};


console.log(swapping_two_values([2, 3, 5, 7, 6]));