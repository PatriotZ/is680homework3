/*Homework 3
Example 2 JavaScript code
*/
console.log("Akhtari's Output from Homework 3 Example 2");

var day = prompt("Enter day");
switch(day) {
    case 'mon':
      // code block
      console.log("tue")
      break;
    case 'tue':
      // code block
      console.log("wed")
      break;
    case 'wed':
        console.log("thu")
    break;
    case 'thu':
        console.log("fri")
    break;
    case 'fri':
        console.log("sat")
    break;
    case 'sat':
        console.log("sun")
    break;
    case 'sun':
        console.log("mon")
        break;     
    default:
        console.log("Wrong input")
      // code block
  }