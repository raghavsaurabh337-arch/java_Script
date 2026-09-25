let name="saurabh"
let BodyCount=59
console.log(name+BodyCount + " values");
console.log(`this is my ${name} and bodycount ${BodyCount}`);


const Inname =new String('saurabh')
console.log(Inname)
console.log(Inname.__proto__)
console.log(Inname.toUpperCase())
console.log(Inname.charAt(4)) // number of index show tha values
console.log(Inname.indexOf ("a")) // values of index show the index NUmber
console.log(Inname.substring (1,4)) // positive values 
console.log(Inname.slice(-7 ,4)) // they are negative values


const  newStrin="     raghav    " // space remove 
console.log(newStrin)
console.log(newStrin.trim())

const url="http://saurabh.com%39raghav";
console.log(url.replace('39','-'))
console.log(url.includes('saaurabh'))

