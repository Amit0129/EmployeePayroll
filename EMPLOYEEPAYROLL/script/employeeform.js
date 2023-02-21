var arr = [1,2,3,4,5,6];
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
var num = 2;
var count = 1;
for(var i=0;i<arr.length;i++){
    if(num==arr[i]){
        console.log("Number"+" "+num+" "+"Found in Index"+" "+i)
        break;
    }
    if(count==arr.length){
        console.log("Number is not found")
    }
    count++;
}
if(arr.includes(num)){
    console.log("number found")
}
else{
    console.log("not found")
}


