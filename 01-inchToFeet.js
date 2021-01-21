
function converter(inchValue){
    var feetValue = inchValue * 0.0833333;
    return feetValue;
}

feetValue = converter(12);
console.log(feetValue);