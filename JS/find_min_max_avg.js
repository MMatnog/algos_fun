// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array, 
// minimum value in the array as well as the average values in the array. 

let find_min_max_avg = (array) => {
    if (array.length > 0){
        let max = array[0];
        let min = array[0];
        let sum = array[0];
        for (let i = 1; i < array.length; i++){
            sum += array[i];
            if (array[i] > max){
                max = array[i];
            };
            if (array[i] < min){
                min = array[i];
            };
        };
        let average = sum / array.length;
        console.log(`Max : ${max}, Min : ${min}, Average: ${average}`);
    };
};


find_min_max_avg([1,5, 10, -2]);


