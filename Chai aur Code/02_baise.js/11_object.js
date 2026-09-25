// singleton
//  object .creatte




// object literals
const mysym = Symbol("key1")

const user={
    id:"231121",
    "last":"pyal",
    username:"saurabh raghav",
    email:"raghav@gmail.com",
    lastLogin:["monday"],
    [mysym]:"mykey1" //then [] typeof symbol show 

}
console.log(user.id);
console.log(user.last);
console.log(typeof user.mysym);
user.email="google@grmail.com"
console.log(user.email)
Object.freeze(user)  // lock user in js after then not chnage user 
console.table(user)
console.log(user)


