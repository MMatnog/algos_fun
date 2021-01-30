// Given an array with multiple values (e.g. [1,3,5,7,20]), write a program that prints the average of the values in the array.  
// Again you're not to do this by using of any of the pre-built functions in Javascript.  
// Again iterate through each number in the array and update the 'average' as the program retrieves each number in the array.


let find_avg = (array) => {
    if (array.length > 0){
        let sum = array[0];
        for (let i = 1; i < array.length; i++ ){
            sum += array[i];
        };
        console.log(sum/array.length);
    };
};

find_avg([1,3,5,7,20]);
find_avg([]);