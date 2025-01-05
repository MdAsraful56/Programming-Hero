var monny = 1000;

var apple = 270;
var orange = 220;

var total = apple + orange;

var returnMonny = monny - total;
console.log(returnMonny);






var array = [75,25,65,80,35,45,99,50];
var sum = 0;

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    var sum = sum + element;
}
var avg = sum / array.length;
console.log(avg);






var input = 119;

var output = input % 5;
console.log(output);




var a = isNaN('11');
console.log(a);

var b = isNaN(2-10);
console.log(b);