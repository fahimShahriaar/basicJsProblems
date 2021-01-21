// ------ fact using for loop --------
// var fact = 1;
// function getFactorial(num){
//     for(var i = 1; i<=num; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(getFactorial(6));

// ----------fact using while loop---------


function getFactorial(num) {
    var fact = 1;
    var i = 1;
    while(i <= num){
        fact = fact * i;
        i++;
    }
    return fact;
}
console.log(getFactorial(10));