// const coding=['java','python','c++','c']
//  coding.forEach(function(item){
//     console.log(item);
// })
// const coding=['java','python','c++','c']
// const value=coding.forEach((item)=>{
//     console.log(item);
    
//     return item
// })
// console.log(value);



///   filter 

const myarray=[1,2,3,4,5,6,7,8,9,7,3]
const newMyNum=myarray.filter(function (num) { 
   return num>4 
    })
console.log(newMyNum);