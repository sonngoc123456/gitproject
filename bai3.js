let number = [1,5,14,21,15,20,3,7,2,10];
let max = number[0];
let index = 0;
let sum = 0;
for (let i = 0; i < number.length; i++) {
    if(number[i] > max) {
        max = number[i];
        index = i;
    }
    sum += number[i];
}
document.write('max = ' + max + ' tai vi tri ' + index + '<br>');
document.write('trung binh cac so = ' + (sum/number.length));
