//  ----- using js method ----------
// var str = 'Hello There! Good Morning Bangladesh';
// var strArr = str.split(' ');
// console.log(strArr.length);

//  ----------using manually --------

var str = 'I will be succeed inShaAllah';
var count = 0;

for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if(char == ' '){
        count++;
    }
}
console.log(count);
