//wap a prgram to know which is the coldest country in array
let countries=["Canada","London","NewYork","Russia"];
    if("canada"=="London","NewYork","Russia"){
        console.log("Canada is the coldest country");
    }
    console.log(countries);

    //

    

    // wap a linear search program also find the number of itration of found element
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