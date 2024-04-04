// alert("hello from script js!")

// variables
// scope name = value;

// comment in js

/*
this
is
multi
line 
commet
*/

// let a = "10"
// let b = 10
// let c = 30

// oprators

// 1. Airhtmatics + - / * %
// 2. increement and decreement ++ , -- (pre,post)
// 3. Assignment =
// 4. Conditional/Comparision Oprators < , > , <= , >= , != , == , ===
// 5. (Logics gates) Logical Oprators &&(AND) , ||(OR) , !(NOT) 
// 6. Bitwise oprators & , ||
// 7. Dot notation ' . '

// opration

// () , [] , {}

// data types in js
// 1)primitve , 2)non-primitve

// 1)  Number (integers, floats, double) (1,1.0,1.514) , String (group of charchters ,a string has to be writing in qoutes "" , '' , `` back ticks ), Boolean (true, false)

// undefined (trying to access before ), null

// 2) Array, objects, function
// NaN (not a number)

// let z = null

//let a = 30
//let b = "amey"
//let c = false

//let d = [1,2,3,4]
//let e = {
  //  name: "name 1"
//}

//let f = () =>{
   // console.log('hello')
//}

//let g;

//let h = null

//let i = Number("a1")

//console.log(typeof(a))
//console.log(typeof(b))
//console.log(typeof(c))
//console.log(typeof(d))
//console.log(typeof(e))
//console.log(typeof(f))
//console.log(typeof(g))
//console.log(typeof(h))
//console.log(i)

//String + number = string
/*var num1=5;
var num2=5;
console.log("5" + 5);

//string + boolean = string
let string1=6;
let boolean=false;
console.log( "6" + false);

//number + string = string
let sum1=10;
let sum2=20;
console.log(10 + "20");

//number + boolean = number
let boolean1=null;
console.log(7 + null );

// number + number = number
let boolean2=10;
console.log (10+20);

//boolean + string = string
let boolean3=true;
console.log(1+ "8" );*/


//Arithmatics(+,-,*,/,%)


// Addition
  /*var a=4;
  var b=10;
  var c=a+b;
  //(c=4+10)
console.log(c); 

// Subtraction
  var a=10;
  var b=30;
  var c=a-b;
  //(c=10-30)
console.log(c); 

//multiplication
  var a=9;
  var b=9;
  var c=a*b;
  //(c=9*9)
console.log(c); 

//division
  var a=25;
  var b=5;
  var c=a/b;
  //(c=25/5)
console.log(c); 

//modulus
  var a=7;
  var b=5;
  var c=a%b;
  //(c=7%5)
console.log(c);
//Arithmatic complete*/

//conditional statemants
//if

/*var a=10;
var b=20;
var c=30;
if(a < b){
  console.log("a is smaller than b");
}

//if-else starts

var x=-1;
var y=+2;
var z=-3;
if(x > 0){
  console.log("x is positive");
}
else{
  console.log("x is not positive");
}

//if-else ends

//if-else if starts
//program 1

/*let day="monday";
let day2="wednesday";
if(day=="monday"){
  console.log("its the middle day of the week");
}
else if(day2=="wednesday"){
  console.log("its the first  day of the week");
}
else{
  console.log("its the third day of the week");
}

//program 2

/*let p=400;
let q=200;
let r=300;
if(p>q){
  console.log("p is greater than q and r!");
}
    if{
      console.log("r is greater than q and p!");
    }
  else-if(q>r){
    console.log("q is greater than p and r!");
  }
    else{
      console.log("r is greater than p and q!");
    }*/

//if-else if ends

//nested-if starts

/*let age=18;
let nationality=US;
if(age>=18){
  if(nationality==="US"){
    console.log("you are eligible to vote");
  }
  else{
    console.log("you are eligible to vote");
  }
}
else{
  console.log("you are not eligible to vote");
}*/

//ternary operator starts

/*let p=10;
let q=20;
p<q ? console.log ("p is less than q") : console.log("q is less than p")

//ternary operator end
//switch case start

/*let num1 = Number(prompt("Enter the first number:"))
let num2 =Number (prompt("Enter the second number:"))
let choice=prompt("Enter the operation (+,-,/,*,%:");
let result;
switch(choice) {
    case 1:
        result = num1 + num2;
        break;
    case 2:
        result = num1 - num2;
        break;
    case 3:
        result = num1 * num2;
        break;
    case 4:
      result = num1 / num2;
        break;
    case 5:
        result = num1 % num2;
        break;
    default:
        result = "Invalid operation";
}*/

//let fullName = "ayushi date"

// //  string.slice( starting index , ending index ) returns a new string with chars of the privious string from starting index to ending index

/* let firstName = fullName.slice( 0 , 6 )

 console.log(firstName)

 console.log(fullName)


 let fname = fullName.substring(0,4)

 console.log(fname)

 console.log(fullName)

 let data = window.prompt("Enter Something in data !")

 //string.trim() it will remove additional spaces from leading and trailing part

 data = data.trim() 

 console.log(data)

console.log(data.length)

 let newString = "This is a new string with some more text content that can be a a a displayed !"

 console.log(newString)
 
 newString = newString.replace("a","A")
 newString = newString.replaceAll("a","z")

 console.log(newString)

 let str1 = "this is 1"
 let str2 = "this is 3"

console.log(str1.match(str2))

 if(str1 == str2){
     console.log(true)
 }else{
     console.log(false)
 }*/

// replace single char only, regular exp, match case

// wap to extract first name middle name and last name from a string, take user input format FIRSTNAME MiDDLENAME LASTNAME

 /*let fullName = window.prompt("Enter Name in First Middle Last")

 if (fullName) {

    // check the string if it is in format or not
//to deal with this problem we have to count the number of spaces in the string i.e. spaces has to count 2 

     let count = 0;

     let pointer = 0;

     while (pointer < fullName.length) {

        if (fullName.charAt(pointer) == " ") {
            count = count + 1
             count++
         }

         pointer++

     }

     console.log(count)

     if (count === 2) {

         fullName = fullName.trim()

         let fn, mn, ln

         console.log(fullName)
         console.log(fullName.length)

         fn = fullName.slice(0, fullName.indexOf(" "))

         mn = fullName.slice(fullName.indexOf(" "), fullName.lastIndexOf(" "))

         ln = fullName.slice(fullName.lastIndexOf(" "), fullName.length)

         console.log(`First Name is ${fn} , Middle name is ${mn} and Last name is ${ln}`)
     } else {
         console.log("Invalid String Write in First space Middle space Last format  !")
     }
 } else {
     console.log("Invalid String !")
 }*/

/*let fullname="Ayush Date"
while (fullname<fullname.length){
  {

    if (fullName.charAt(pointer) == " ") {
        count = count + 1
         count++
     }

     pointer++

 }

 console.log(count)

 if (count === 2) {

     fullName = fullName.trim()

     let fn, mn, ln

     console.log(fullName)
     console.log(fullName.length)

     fn = fullName.slice(0, fullName.indexOf(" "))

     mn = fullName.slice(fullName.indexOf(" "), fullName.lastIndexOf(" "))

     ln = fullName.slice(fullName.lastIndexOf(" "), fullName.length)

     console.log(`First Name is ${fn} , Middle name is ${mn} and Last name is ${ln}`)
 } else {
     console.log("Invalid String Write in First space Middle space Last format  !")
 }
} else {
 console.log("Invalid String !")
}
  /*console.log(fullname);
  count++;
}
let fName="Ayushi";
let lName="Date";
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let fullName = firstName+" "+ lastName;
let charCount =0;
let i=0;

while(i<fullNmae.length){
  if(fullName[i] !==' '){
    charCount++;
  }
  i++;
}*/
//looping statements
 //while, do while, for,[ forEach , for of, map, filter ] , for in object

//syntax for while loop

/* while(condition){
     statment
//     updation in condition
}*/

 /*let a = 0;

 while (a <= 1000) {
     console.log(a);
    a++;
 }*/

 //let a = 10

 //while (a >= 0) {
   //  console.log(a)
     //a--
 //}

//find the count of "a" in this string

 /*let string = "aabacadaea"

 let count = 0;

 let pointer = 0

 while (pointer < string.length) {

    if (string.charAt(pointer) == "a") {
          count = count + 1
        count++
     }

     pointer++

 }*/

 /*console.log(count)

 find odd and even number from 0 to 1000

 let number = 0

 while (number <= 1000) {
     if(number % 2 == 0){
          console.log(`Number ${number} is even !`)
        console.log("Number "+number+ " is even !")
     }else{
         console.log(`Number ${number} is odd !`)
     }

    number ++

 }*/


// factorials, 5 = 5*4*3*2*1 = 120

 //wap in to find factorials for numbers

 /*let number = 6;

let org = number;

 let fact = 1;

while(number != 0){

     fact = fact * number //30,120,360,720,720

    number--

 }

 console.log(`factorial of ${org} is ${fact} !`)*/


 /*wap in js to reverse a numbers
 let num = 123 //6452
 let org = num
 let rev = 0
let d;

while(num != 0){
    d = num % 10

    rev = rev * 10 + d

     num = parseInt(num / 10)
 }

console.log(`reverse of ${org} is ${rev}`)*/

// palindrome numbers/strings

 /*let num = 727;
 let org = num;
 let rev = 0;
 let d;

 while(num != 0){
   d = num % 10

     rev = rev * 10 + d

     num = parseInt(num / 10)
 }

 console.log(rev)

 if(org == rev){
     console.log(`${org} is a palindrome !`)
 }else{
     console.log(`${org} is not a palindrome !`)
 }*/

 //sum of digits

 /*let num = 19;
 let org = num;

 let d;
 let sum = 0;

 while(num != 0){

     d = num % 10

     sum = sum + d 

     num = parseInt(num/10)

 }

console.log(`The sum of digits of ${org} is ${sum} !`)*/

// armstrong number, sum of digits (with power of numbers of digits) is equal to orgnial number
 /*123 = 1*1*1 + 2*2*2 + 3*3*3 = 1 + 8 + 27 = 36 not a armstrong number
 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153 it os armstrong number*/

 /*let num = 912985153;

 let org = num;
 let d;
 let sum = 0;

 while(num != 0){

     d = num % 10

     sum = sum + (d*d*d*d*d*d*d*d*d)

     num = parseInt(num/10)

 }

 console.log(sum)

if(org == sum){
    console.log(`${org} is a armstrong number !`)
 }else{
     console.log(`${org} is not a armstrong number !`)
 }*/

 //wap to find numbers of digits in a number
/*{
 let num = 1243545456;

 let d;

 let digits = 0;

 while (num !=0 ) {

     d = num % 10

     if (d) {
         digits++
     }

    num =  parseInt(num / 10)

}

 console.log(digits)
}*/

// wap to find wheater a any number is armstrong or not 

/*let num = 4679307774

let org = num

let digits = 0

let d

let sum = 0

while (num != 0) {
    d = num % 10

    if (d) {
        digits++
    }

    num = parseInt(num / 10)
}

console.log(`${org} has ${digits} digits !`)

num = org 

// num = org reset with original value , because num become 0 after first loop

// console.log(num)

while(num != 0){

    d = num % 10

    sum = sum + Math.pow(d,digits)

    num = parseInt(num/10)

}

console.log(sum)

if(org == sum){
    console.log(`${org} is a armstrong number !`)
}else{
    console.log(`${org} is not a armstrong number !`)
}*/
/*{
let table_no = 17;

while (table_no <= 18) {

  let num = table_no;
  let counter = 1;

     while (counter <= 10) {

         console.log(`${num} * ${counter} = ${num * counter} `)
         counter++

     }

     table_no ++

     console.log(".........................")

 }
}*/

//do while loop
// syntac for do while loop

// do{
//     // statments 
//     // updation
// }while(condition)

// wap to take user input as year then check if leap year, ask again to enter year if continues.

/*let chooice = "no"

do{

    let year = Number(prompt("Enter Any Year !"))

    if( (year % 4 == 0) || ((year %100 == 0) &&  (year % 400 == 0) ) ){
        console.log(`${year} is a leap year !`)
    }else{
        console.log(`${year} is not a leap year !`)
    }

    chooice = prompt("do you wish to continue ? yes/no(kuch bhi )")

}while( chooice == "yes" )

// make replace all function to replace single element
// some edits*/
//factorials, 5 = 5*4*3*2*1 = 120

 //wap in to find factorials for numbers
//{
// let number = 6;

//let org = number;

 //let fact = 1;

 
// fact = fact * number //30,120,360,720,720
//number--
 //console.log(`factorial of ${org} is ${fact} !`)
//}

/*while(number != 0){

     fact = fact * number //30,120,360,720,720

    number--

 }

 console.log(`factorial of ${org} is ${fact} !`)
}*/
/*{
  let fact(n) {
    let number=1;
    for(let i=2;i<=n;i++){
      number*=i;
    }
    let number;

  }
  //console.log(`factorial of ${fact} is ${number} !`)
  console.log(fact(5));  //20,60,120,120
}*/


 //wap in js to reverse a numbers
 /*{
 let num = 123 //6452
 let org = num
 let rev = 0
let d;

while(num != 0){
    d = num % 10

    rev = rev * 10 + d

     num = parseInt(num / 10)
 }

console.log(`reverse of ${org} is ${rev}`)
 }*/

// palindrome numbers/strings
/*{
 let num = 101;
 let org = num;
 let rev = 0;
 let d;

 {
   d = num % 10

     rev = rev * 10 + d

     num = parseInt(num / 10)
 }

 console.log(rev)

 /*if(org == rev){
     console.log(`${org} is a palindrome !`)
 }else{
     console.log(`${org} is not a palindrome !`)
 }
}*/

 //sum of digits
/*{
 let num = 19;
 let org = num;

 let d;
 let sum = 0;

 while(num != 0){

     d = num % 10

     sum = sum + d 

     num = parseInt(num/10)

 }

console.log(`The sum of digits of ${org} is ${sum} !`)
}*/
/*{
  let sum=0;
  let n=10;
  for(let i=1;i<=10;i++){
  sum=sum+i;
  }
  console.log("sum= ",sum);
}*/


// armstrong number, sum of digits (with power of numbers of digits) is equal to orgnial number
 /*123 = 1*1*1 + 2*2*2 + 3*3*3 = 1 + 8 + 27 = 36 not a armstrong number
 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153 it os armstrong number*/
/*{
 let num = 912985153;

 let org = num;
 let d;
 let sum = 0;

 while(num != 0){

     d = num % 10

     sum = sum + (d*d*d*d*d*d*d*d*d)

     num = parseInt(num/10)

 }

 console.log(sum)

if(org == sum){
    console.log(`${org} is a armstrong number !`)
 }else{
     console.log(`${org} is not a armstrong number !`)
 }
}*/
/*{
let num=7;
let multi=0;
for(let i=1; i<=7;i++){
  multi=multi*i;
}
console.log("multi= ",multi);
if(num){
  console.log(`${num} is a armstrong number !`)
}else{
   console.log(`${num} is not a armstrong number !`)
}
}*/

//Print number from 1 to 5
/*{
  for(let i=5;i>0;i--){
    console.log(i);
  }
}*/


//Even numbers
/*for(let i=0;i<=10;i++){
  if(i%2===0){
console.log("i=",i)
}
}/*




 //wap to find numbers of digits in a number
/*{
 let num = 1243545456;

 let d
 let digits = 0;

 while (fornum !=0 ) {

     d = num % 10

     if (d) {
         digits++
     }

    num =  parseInt(num / 10)

}

 console.log(digits)
}*/
/*{
  let num = 12435;
  let d;
  let digits = 0;
 
  while (num !=0 ) {
 
      d = num % 10
 
      if (d) {
          digits++
      }
 
     num =  parseInt(num / 10)
 
 }
 
  console.log(digits)
}*/



//wap to find numbers of digits in a number
/*{
let num=12347898578;
let d;
let digits=0;
for(i=1;i<=num;i++){
  if(d) {
    digits++
  }
  num =  parseInt(num / 10)
}
  console.log("i= ",i)
}*/

// palindrome numbers/strings
/*{
 let num = 101;
 let org = num;
 let rev = 0;
 let d;

 {
   d = num % 10

     rev = rev * 10 + d

     num = parseInt(num / 10)
 }

 console.log(rev)

 /*if(org == rev){
     console.log(`${org} is a palindrome !`)
 }else{
     console.log(`${org} is not a palindrome !`)
 }
}*/
  /*let num = 101;

for(i=1;i<=3;i++){
  if(isPalindrome(i)){

}
  console.log(num)
}
  if(num){
    console.log(`${num} is a palindrome !`)
}else{
    console.log(`${num} is not a palindrome !`)
}*/

//trailing portion
//push method
{
let nums=[21,22,23,24,25]
console.log(nums.length);
nums.push(26,27);
console.log(nums);
}

//pop method
{
let nums=[21,22,23,24,25]
console.log(nums.length);
nums.pop(25,26,27);
console.log(nums);
}

//leading portion
//unshift method
{
let str=["Ayu","Anu","Anku","Akshu"]
console.log(str.length);
str.unshift("Tina","Unatti");
console.log(str);
}

//Shift method
{
  let str=["Ayu","Anu","Anku","Akshu"]
  console.log(str.length);
  str.shift("Tina","Unatti");
  console.log(str);
  }

  //Splice method
  {
    let str=["Ayu","Anu","Anku","Akshu"]
    console.log("Ayu","Anu","Anku","Akshu")
    str.splice(2,0,"Archu");
    console.log(str);
  }

  //Slice method
  {
    let str=["Ayu","Anu","Anku","Akshu"]
    let newstr=str.slice(0,1)
    console.log(newstr);
    //console.log(names);
  }

  //Four types of function

//no argument no return using arrow function
  {
    function sum(){
      console.log(10+20)
    }
    sum()
    let sum1=()=>{
      console.log(10+20)
    }
  }

  //argument but no return
  {
    function sum(a,b){
      console.log(a+b)
    }
    sum()
    let sum1=()=>{
      console.log(250,50)
    }
  }

  //argument and return
  {
    function sum(a,b){
        return a+b
    }
    let sum1=()=>{
      console.log(sum(50,50))
    }
  }

//no argument but return
  {
    const greet = () =>{
      console.log("hello world !")
    }
    greet()
    greet()
    greet()
    greet()
    greet()
}

//Math class method
{
let a = Math.pow(2,2)
console.log(a)
}

{
  console.log(Math.sqrt(144))
  console.log(Math.cbrt(125))
}

{
let maxnumber=Math.max(12,28,56,78)
let minnumber=Math.min(1,2,3,5)
    console.log(maxnumber)
    console.log(minnumber)
}

//Random numbers
{
console.log((Math.random()*7+1).toFixed(0))
}

//Generate random Otp
//Six digits
{
let Otp;
otp=(Math.random()*999999).toFixed(0)
console.log(otp)
console.log(typeof(otp))
    if(otp.length<=6){
    console.log(otp)
    console.log(typeof(otp))
    }
}

//Round of value
//value<0.5=0
{
  let value=61.4539
  value=Math.round(value)
  console.log(value)
}
{
  let value=90.999999
  value=Math.floor(value)
  console.log(value)
}
{
  let value=61.4539
  value=Math.ceil(value)
  console.log(value)
}


//Method overloading
{
  function sumofNumber(a,b){
  alert("1")
  return a+b
}
function sumofNumber(a,b,c){
  alert("2")
  return a+b+c
}
function sumofNumber(a,b,c,d){
  alert("3")
  return a+b+c+d
}
function sumofNumber(a,b,c,d,e){
  alert("4")
  return a+b+c+d+e
}
console.log(sumofNumber(10,20))
}

//Arrow function for no arguments and return

let greet=()=>{
  //function body
  return "Hello"
}
console.log(greet())

//object iteration(forin loop)

/*{
  let student={
    name:"Anu",
    roll:5,
    contact:7498524141,
    id:"A123"
  }
  console.log(key)
  console.log(student[key])
  console.log('${key}=$(student[key])')
  console.log(student)
}*/

{
let nums=[1,2,3,4]

let[a,b,c,d]=[1,2,3,4]
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
}

//object extraction
{
let user={
  name:"Anu",
  contact:7498524141,
  id:"A123"
}
console.log(user.name)
}


