
console.log("operater");
let num1=40;
let num2=30;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1*num2);
console.log(num1%num2);
console.log(num1**num2);
let a=10;
++a
console.log(a)
a++ // a=a+1;
console.log("++",a)
--a
console.log(a)
a-- //a=a-1
console.log(a)


/* assignment */
let c=30;
let b=40;
c*=4;
console.log(c);
c/=4;
console.log(c);

c+=4;
console.log(c);
c-=4;
console.log(c);


/* #Conditional Statements*/
let age =15;
if(age>=18)
{
    console.log("you can vote");
}
else{

    console.log("you can not vote");

}

let mode ="drak";
let color;
if(mode==="drak"){
     color="black"
}
if(mode==="light"){
     color="white"
}
console.log(color);

let colorr;
let moode;
if(moode==="dark-mode"){
     colorr="black";
}else{
     colorr="white"
}
console.log(colorr)

let agee=70;
if(agee<18){
     console.log("junior");
}
else if(agee>60){
     console.log("senior");
}else{
     console.log("middle")
}

// alert("hello")
// let name=prompt("i am saurabh");
// console.log(name);
let num =prompt("Enter the number:");
if(num%5===0){
     console.log("multiple true");
}
else {
      console.log("multiple false");
}


/* marks program */

let marks=prompt("enter marks");
if(marks>=90 && marks<=100){
     console.log("grade A");
}
if(marks>=70 && marks<=89){
     console.log("grade B");
}
if(marks>=60 && marks<=69){
     console.log("grade C");
}
if(marks>=50 && marks<=59){
     console.log("grade A");
}
if(marks>=0 && marks<=49){
     console.log("grade F");
}




