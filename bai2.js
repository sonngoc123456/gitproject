let number = [1,5,74,21,15,20,63,47,52,10];
let max = number[0];
let index = 0;
for (let i = 0; i < number.length; i++) {
    if(number[i] > max) {
        max = number[i];
        index = i;
    }
}
/*
 for(const index in number) {
    if (max < index) {
        max = index;
    }
}
 */
document.write('max = ' + max + ' tai vi tri ' + index);