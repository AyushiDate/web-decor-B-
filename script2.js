//wap a prgram to know which is the coldest country in array
/*let countries=["Canada","London","NewYork","Russia"];
    if("canada"=="London","NewYork","Russia"){
        console.log("Canada is the coldest country");
    }
    console.log(countries);

    //*/

    

    // wap a linear search program also find the number of itration of found element
/*{
let numbers = [10,2,3,4,5,6,7,8,9]
let searchElement = Number(prompt("Enter Number to search !"))

let postion = -1

let found = false

let repeatCount = []

for (let i = 0; i < numbers.length; i++) {
    if (searchElement == numbers[i]) {
        found = true
        postion = i + 1
        repeatCount.push(postion)
    }
}

if(found){
    console.log(`Element ${searchElement} was found on position/s : ${repeatCount} | the element has been repeated ${repeatCount.length} times !`)
}else{
    console.log(`Element ${searchElement} was not found position : ${postion} | the element has been repeated ${repeatCount.length} times !`)
}
}*/

//Random Numbers
/*{

let RamdomNumber=(length,Rangelimit)=>{
    let integers=[]
    let Number=0
        for(let i=0;i<length;i++){
            Number=Math.floor(Math.ramdom()*Rangelimit+1)
            integers[i]=Number
        }
        return integers;
}
let Number=RandomNumber(10,11)

console.log(Number)
}*/

//Random Numbers
// wap in js to make a array of 10 random numbers element(using Math class and array push/unshift method)
/*{
let createRandomNumberArray = (length, RangeLimit) => {
    let ArrayName = []
    let randomNumber = 0
    for (let i = 0; i < length; i++) {
        randomNumber = Math.floor(Math.random() * RangeLimit + 1)
        ArrayName[i] = randomNumber
    }
    return ArrayName;
}
let numbers = createRandomNumberArray(10, 11)

console.log(numbers)
}*/

{
    let students = [ 
          {name: "amey" , age : 13 , contact: 9766696550},
           {name: "jayesh" , age : 19 , contact: 787454683},
           {name: "Anushree" , age : 23 , contact: 789745464},
           {name: "Ayushi" , age : 20 , contact: 4567688963},
          {name: "Unnati" , age : 11 , contact: 5457993632},
           {name: "Tina" , age : 16 , contact: 8777999633},
           {name: "yash" , age: 22, contact: 7897987642 }
       ]
      
       //students[0].address = "nagpur"
      
      // we have created a data sheet of student in array called students each element of this array is object which has some keys like name, age, contact
      
       //students.push({name:"om", age: 15 , contact: 787987987})
      
      /*for(let student of students){
           student.address = "nagpur"
       }
      
       for(let student of students){
           console.log(student)
       }
      
       students.forEach((student,index)=>{
           console.log(student)
           console.log("at")
           console.log(index)
       })*/
      
       /*let displayStudents = (student)=>{
           console.log("from map")
           console.log(student)
       }
      
       students.map(displayStudents)*/
      
       for(let i=0;i< students.length; i++){
           console.log("for loop")
           console.log(students[i])
       }
      }
      
    
    
    



