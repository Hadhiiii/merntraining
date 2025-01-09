var array1=[12,44,13,44,333];
var array2=[34,233,44,32,35];
var array3=[34444,2233,444,324,354];
var array4=[3,4,45,24,34];
var alphab="my name is george"
console.log("array1 is :",array1);
console.log("array2 is :",array2);
console.log("array3 is :",array3);
console.log("array4 is :",array4);
array1.push(100);
array2.pop(233); 
array3.shift(0);
array4.unshift(0);
console.log("array1 after push is :",array1);
console.log("array2 after pop is :",array2);
console.log("array3 after shift is :",array3);
console.log("array4 after unshift is :",array4);
console.log(array1.concat(array4));
console.log(array3.slice(2));