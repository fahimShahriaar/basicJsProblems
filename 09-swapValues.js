// ------ swaping values with temp variable -------------
var x = 5;
var y = 10;

console.log('Before swap: x = ' + x + ', y = ' + y);

var temp = x;
x = y;
y = temp;

console.log('After swap: x = ' + x + ', y = ' + y);


// -------- swaping values without any temp variable ----------

var a = 10;
var b = 20;

console.log('Before swap: a = ' + a + ', b = ' + b);

a = a + b;
b = a - b;
a = a - b;

console.log('After swap: a = ' + a + ', b = ' + b);


// ---------- using language predefined process -------------
//  ------   [This is called destructing assignment]   ---------

var p = 50; 
var q = 100;

[p, q] = [q, p];
console.log('After swap: p = ' + p + ', q = ' + q);