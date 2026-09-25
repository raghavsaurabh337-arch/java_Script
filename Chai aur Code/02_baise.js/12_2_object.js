
// const tinderUser= new Object()
const tinderUser={}
console.log(tinderUser);


tinderUser.id="1243abc"
tinderUser.email="raghav@gmail.com"
tinderUser.isLoginIN=false
// console.log(tinderUser);

const regulerUser={
    email:"rahghavsaurabh@gmial.com",
    fullname:{
        fullusername:
        {
            fistname:"saurabh",
            lastname:"raghav"


        }
    }
}
console.log(regulerUser.fullname.fullusername.fistname);


const  obj1={1:"a",2:"b"}
const  obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);



const user=[
    {
        id:894,
        email:"pyal@gmail.com"
    },
    {
        id:894,
        email:"pyal@gmail.com"
    },
    {
        id:894,
        email:"pyal@gmail.com"
    },
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ "destructor in JS

const course={
    courseName:"JAVA script ",
    price: "1000",


}
const  {price}=course
const  {price:p}=course
console.log(price);
console.log(p);
console.log(course.price);




