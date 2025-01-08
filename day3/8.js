//js to sort a given number in ascending order 
//2 descending
//no sorting algorithm
//a={}
//ascend
var a=[1,5,2,3,10,9,8,7,6];
for(var i=1;i<a.length;i++)
    for(var j=0;j<i;j++)
        if(a[i]<a[j]){
            var x=a[i];
            a[i]=a[j];
            a[j]=x;
        }
        console.log(a); 
//dece
        var a=[1,5,2,3,10,9,8,7,6];
        for (var i=0;i<a.length - 1;i++){
            for(var j=i+1;j<a.length;j++){
                if(a[i]<a[j]){
                    let temp=a[i];
                    a[i]=a[j];
                    a[j]=temp;
                }

            }
        }
console.log(a); 

   