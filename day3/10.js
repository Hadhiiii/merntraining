//js to reverse a given string without using built in function
// 
// a is keystoring
//b is reverse keystrore
const a="HELLOWORLD";
var b="";
for(let i=a.length-1;i>=0;i--){
    b=b+a[i]
}
console.log(b);
