let i = 1;
let attempts = 3;
while(i<=attempts){
    let pw = prompt("Enter password");
    if(pw!="secret"){
        i++;
    }
    else{
        console.log("You entered the password after ",i," attempts");
        break;
    }
}
i--;
if (i>=attempts){
    console.log("Your account is locked!  You failed to enter the correct password",i, "times");
}