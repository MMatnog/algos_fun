// Create an array X and fill the array with 10 values, each value being a random integer between 0 to 100.  
// For example when your program is done, X could be something like this: [35, 15, 3, 39, 53, 93, 25, 39, 59, 21].

let random_array = () => {
    let x = [];
    let count = 1;
    while (count <= 10){
        x.push(Math.floor(Math.random()* 101));
        count++;
    };
    return x;
};

console.log(random_array());