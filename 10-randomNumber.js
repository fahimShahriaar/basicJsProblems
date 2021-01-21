
// console.log(dice);

while (true) {
    var dice = Math.round(Math.random() * 6);
    console.log(dice);
    if (dice == 0) {
        continue;
    }
    else if (dice == 6) {
        break;
    }
}