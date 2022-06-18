let numbers = [1,2,-8,-10,5,8,7,6,-7];
let count = 0;
// let numbers = [];
// for (let i = 0; i < 5; i++) {
//     let number = prompt('enter the number');
//     numbers.push(number);
// }
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        document.write(numbers[i] + '<br>');
        count++
    }
}
document.write('co ' + count + ' so nguyen am');