const tempterature = 33;
if (tempterature >40) {
        console.log("It's a hot day");
}else{
    console.log("It's a normal days");
}

let a=10;
let b=" 10";
if (a===b) {
    console.log("T");
}
else{
    console.log("F");
}

let balance=0;
if(balance<=0){
    console.log("less then 0");
    function sub(){
        console.log("hello");
        balance=balance-100
        console.log(balance);
    }
    sub()
}else if(balance<=500) {
    console.log("less then 500");
    function sub(){
        console.log("hello");
        balance=balance-100
        console.log(balance);

    }
    sub()
}else if(balance<750){
    console.log("less then 750");
    function add(){
        console.log("hello");
        balance=balance+100
        console.log(balance);
        
    }
    add()
}else if(balance<900){
    console.log("less then 900");
}
else{
    console.log("more then 900");
}


const userLoggedIn = true;
const isEmailVerified = true;
const cardInfo = true;
const isGuest = false;
const isusergooglefrom = true;

if(userLoggedIn && isEmailVerified && cardInfo){
    console.log("Welcome to the website");
}
else if(userLoggedIn && isEmailVerified && !cardInfo){
    console.log("Please add your card info");
}


