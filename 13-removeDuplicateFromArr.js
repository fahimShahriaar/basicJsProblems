var arr = [1, 2, 4, 3, 4, 5, 2, 1, 6, 7, 9, 10, 7];
var arrUnique = [];

for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (arrUnique.indexOf(element) == -1) {
        arrUnique.push(element);
    }
}
console.log(arr);
console.log(arrUnique);