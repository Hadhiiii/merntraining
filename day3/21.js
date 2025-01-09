//to display all the numbers which are divisible by 30 but not by 3 


var numbers = [1, 5, 2, 3, 10, 9, 8, 7, 6];

var max = Math.max(...numbers);
var min = Math.min(...numbers);

console.log("Biggest element:", max);
console.log("Smallest element:", min);

var multiplesOf3 = [];
for (var i = 1; multiplesOf3.length < numbers.length; i++) {
    if (i % 3 === 0) {
        multiplesOf3.push(i);
    }
}

var multiplesOf5 = [];
for (var i = 1; multiplesOf5.length < numbers.length; i++) {
    if (i % 5 === 0) {
        multiplesOf5.push(i);
    }
}

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers[i] = multiplesOf3.shift() || 0;
    } else if (numbers[i] % 3 === 0) {
        numbers[i] = multiplesOf5.shift() || 0;
    }
}

console.log("Modified array:", numbers);
// to find multiple of 3 (% and digitSum)

var key = 33;

// %
if (key%3==0) {
    console.log(key+" is multiple of 3.");
} else {
    console.log(key+" is not multiple of 3.");
}
