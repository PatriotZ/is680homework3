/*Homework 3
Example 1 JavaScript code
*/
console.log("Akhtari's Output from Homework 3 Example 1");

var name = prompt("Enter name:");
var units = prompt("Enter number of units completed:");
units = parseInt(units);
if (units > 0 ){
    console.log("Hello",name);
    if (units>0 && units<=30){
    console.log("Your grade standing is Freshman");
    }
    else if (units>30 && units<=60){
        console.log("Your grade standing is Sophomore");
        }
    else if (units>60 && units<=90){
       console.log("Your grade standing is Junior");
    }
    else if (units>90){
        console.log("Your grade standing is Senior")
    }
   
}else{
    console.log("Wrong units");
}