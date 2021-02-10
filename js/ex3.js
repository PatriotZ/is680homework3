var no1 = prompt("Enter first number");
var no2 = prompt("Enter second number");
no1 = parseInt(no1);
no2 = parseInt(no2);
console.log("sum= ",no1+no2);
console.log("difference= ",no1-no2);
console.log("product= ",no1*no2);
if(no2>0){
console.log("division= ",no1/no2);
}else{
    console.log("Math error, division by zero");
}
console.log("mod= ",no1%no2);
