// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces any negative number with the value of 0.  
// When the program is done x should have no negative values (e.g. [1, 5, 10, 0]).


let replace_negatives = (array) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            array[i] = 0;
        };
    };
    return array;
};

console.log(replace_negatives([1,5, 10, -2]));