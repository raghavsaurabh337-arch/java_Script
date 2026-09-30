function sayname(){
    console.log("saurabh");
    console.log("saurabh");
    console.log("saurabh");
    console.log("saurabh");
    console.log("saurabh");
    console.log("saurabh");
    console.log("saurabh");
    
}
// sayname()

function twoNumberAdd(number1 ,number2){
    console.log(number1+number2)
}
// twoNumberAdd(3,4)

function RetrunNumberAdd(number1 ,number2){
   let sum=number1+number2
    return sum
}
const sum =RetrunNumberAdd(5,6)
console.log("result:",sum )


function loginUserMasg(username="sam"){
    if (!username){
        console.log("plz enter the username");
        
        return `${username} just logged in`
    }
    return `${username} please login first}`
}

console.log(loginUserMasg()) 