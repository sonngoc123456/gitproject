let numbers = [];
for (var i = 0; i < 5; i++) {
    number = prompt('enter the number');
    numbers.push(number);
}
document.write(numbers + '<br>');
document.write(numbers.reverse());