
let numbers = [1,2,-8,-10,5,8,7,6,-7];
let v = prompt('enter the number');
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (v == numbers[i]) {
        count++;
    }
}
if(count == 0) {
    alert('khong co trong mang');
}else {
    alert('co trong mang');
}