//console.log("Sarvesh Chaudhary");
let a=14;
let b=21;

a+=10;
console.log(a);

//Arithmetic operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Comparison operators
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);

//Logical operators
console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log(!b);

//Bitwise operators
console.log(a&b);
console.log(a|b);
console.log(a^b);
console.log(a<<b);
console.log(a>>b);
console.log(a>>>b);

//Assignment operators
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);
console.log(a**=b);

//Strict equality operator
console.log(a===b);
console.log(a!==b);

//Loose equality operator
console.log(a==b);
console.log(a!=b);

//Ternary operator
console.log(a>b?"a is greater":"b is greater");

//typeof operator
console.log(typeof a);
console.log(typeof b);

//instanceof operator
console.log(a instanceof Number);
console.log(b instanceof Number);

// // let age =21
// // let status1=(age>=18)?"Eligible":"Not Eligible";
// // console.log(status1);

//falsey values
console.log(false);
console.log(0);
console.log("");
console.log(null);
console.log(undefined);
console.log(NaN);

//truthy values
console.log(true);
console.log(1);
console.log("hello");
console.log({name:"John"});
console.log([1,2,3]);
console.log(function(){});

//Logical OR truthy and falsy
console.log(false || 'Sarvesh');
console.log(0 || 'Sarvesh');
console.log('' || 'Sarvesh');
console.log(null || 'Sarvesh');
console.log(undefined || 'Sarvesh');
console.log(NaN || 'Sarvesh');

console.log(true && 'Sarvesh');
console.log(1 && 'Sarvesh');
console.log('' && 'Sarvesh');
console.log(null && 'Sarvesh');
console.log(undefined && 'Sarvesh');
console.log(NaN && 'Sarvesh');

// conditional statements
let age = 21;
if(age>=18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}
//nested if else statement
let num = 10;
if(num>0){
    console.log("number is positive");
}else if(num<0){
    console.log("number is negative");
}else{
    console.log("number is zero");
}

//switch statement
let day = 4;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//for loop
for(let i=0;i<10;i++){
    console.log(i);
}

//while loop
let i=0;
while(i<10){
    console.log(i);
    i++;
}

//do while loop
let j=0;
do{
    console.log(j);
    j++;
}while(j<10);

//for-in loop
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
for(let key in person){
    console.log(key + ": " + person[key]);
}

//for-of loop
let colors = ["red", "green", "blue"];
for(let color of colors){
    console.log(color);
}

//break and continue
for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}

for(let i=0;i<10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}