let hour = parseInt(prompt("Enter hours: "));
let minute = parseInt(prompt("Enter minutes: "));
let second = parseInt(prompt("Enter seconds: "));

console.log("Time input: ",hour,"h",minute,"m",second,"s");
if(hour >= 0 && hour < 24 && minute >= 0 && minute < 60
    && second>=0 && second < 60){

    if (minute === 59 && second === 59){
        minute = 0;
        second = 0;
        if (hour === 23){
            hour = 0;
        }else{
            hour ++;
        }

    }else if (second === 59 && minute != 59){
        second = 0;
        minute++;
    }else{
        second++;
    }