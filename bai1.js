let number = [1,15,20,11,8,6,5,2,70,-8];
let count = 0;
let sum = 0;
for (const item of number) {
    if (item >= 10) {
        document.write(item + '<br>')
        count++;
        sum += item;
    }
}
if (count == 0) {
    document.write('khong co so nao lon hon hoac bang 10');
}else {
    document.write('co ' + count + 'so lon hon hoac bang 10' + '<br>')
}
document.write('tong cac so dem duoc ' + sum)