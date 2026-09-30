let a=60
// let b=40    // golbal varibal
// const c=30

if (true){
    let b=20   // local scope/variba;s
    const c=40
    // console.log("INNER:",a,b,c);
    

}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username="saurabh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    
    two()
    
}
one()


if (true){
    const username="saurabh"
    if (username==="saurabh"){
        const website=" youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

console.log(addOne(5))  // run
function addOne(num){
    return num+1
}
console.log(add(5,6))  // error
const add=function addTwo(num1,num2){
    return num1+num2+1
}
