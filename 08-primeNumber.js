// var n = 112;
// var result = 0;

// for (var i = 2; i < n; i++) {
//     if (n % i == 0) {
//         console.log('Not a prime number.');
//         result = 1;
//         break;
//     }

// }
// if(result == 0) {
//     console.log('prime number');
// }



function primeNumber(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return 'Not a Prime Number.';
        }
    }
    return 'Prime Number';
}

var result = primeNumber(57);
console.log(result);