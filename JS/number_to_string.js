// Write a program that takes an array of numbers and replaces any number that's negative to a string called 'Dojo'. 
// For example if array = [-1, -3, 2] after your program is done array should be ['Dojo', 'Dojo', 2].


let number_to_string = (array) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            array[i] = "Dojo";
        }
    };
    return array;
};

console.log(number_to_string([-1, -3, 2]));