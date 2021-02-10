//15a:
const x="abc";
switch(x){
case"abc":
console.log("x=abc");
break;
case"def":
console.log("x=def");
break;
}

//"x=abc"

//15b
const x="abc";
switch(x){
case"abc":
console.log("x=abc");
//nobreak
case"def":
console.log("x=def");
break;
}

//"x=abc"
//"x=def"