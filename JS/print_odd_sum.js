// Write a program that would print the sum of all the odd numbers from 1 to 5000

let print_odd_sum = () => {
    let count = 1;
    let sum = 0;
    while (count <= 5000){
        sum += count;
        count += 2;
    };
    console.log(sum);
};

print_odd_sum();