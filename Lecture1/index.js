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

let age =21
let status1=(age>=18)?"Eligible":"Not Eligible";
console.log(status1);

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