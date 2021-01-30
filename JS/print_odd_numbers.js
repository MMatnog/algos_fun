// Write a program that would print all the odd numbers from 1 to 1000

let print_odd_number = () => {
    let count = 1;
    while (count <= 1000){
        console.log(count);
        count += 2;
    }
};

print_odd_number();