//write js to find factorial of a number using recursive function


function fact(n){
    if (n==1){
        return n;
    } else {
        return n*fact(n-1);
    }
}

console.log("factorial of 5 is", fact(5));