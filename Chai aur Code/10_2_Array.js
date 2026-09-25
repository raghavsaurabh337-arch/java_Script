const name1=["saurabh","sandeep","saachin"]
const name2=["mohit","mukul","shekhar"]
// name1.push(name2)
// console.log(name1)

// newName=name1.concat(name2) // limit  set 
// console.log(newName)

const all_new_name=[...name1,...name2]   // no limit 
// console.log(all_new_name)


const array_sub=[1,2,5,6,8,[3,4,7,9,45],90,889,[78,4,3,2,[0,8,7,8,3,47,12,13,43,54]]]
const newArray_sub=array_sub.flat(2)
console.log(newArray_sub)


console.log(Array.from("saurabh"))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))