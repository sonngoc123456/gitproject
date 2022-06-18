let x = [-3, 5, 1, 3, 2, 10];
let fist = 0;
let last = x.length - 1;
while (fist < last) {
    let b = x[fist];
    x[fist] = x[last];
    x[last] = b;
    fist++;
    last--;
}
document.write(x);