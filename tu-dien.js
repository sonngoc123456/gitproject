let english = ["apple", "orange", "banana", "tomato", "pen"];
let vietnamese = ["táo", "cam", "chuối", "cà chua", "bút"];
let word = prompt('enter the number');
let index = -1;
for (let i = 0; i < english.length; i++) {
    if (english[i] == word) {
        index = i;
        break;
    }
}
if(index ===-1) {
   console.log("khong co tu nay");
}else {
    console.log('nghia tieng viet : ' + vietnamese[index]);
}