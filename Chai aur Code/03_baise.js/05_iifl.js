(function chai(){
    console.log('DB connection ');
}) ();


(function chaitwo(name,){
    const age= 23
    console.log(`DB connection ${name}  age is ${age}`);
}) ('Alice');


( (username)=>console.log(`DB connection ${username}`) )("saurabh")