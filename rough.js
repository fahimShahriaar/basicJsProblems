var sentence = "I am hardworking. I am serious. I am sure I will do it";
var count = 0;

for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] == 'a') {
        count++;
    }
}
console.log(count);