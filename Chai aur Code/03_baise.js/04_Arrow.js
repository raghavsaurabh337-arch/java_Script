const user={
    username:"saurabh",
    prices:999,
    
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        
        console.log(this);
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this );

function chai(){
    const username="saurabh"
        
        console.log(this.username); 
    
}
// chai()
const chai1=function chai(){
    const username="saurabh"
        
        console.log(this.username); 
    
}
// chai1()




// ++++++++++++++++++++++++++++++++++++++++++++ Arrow fucntions 

const chai2 = ()=>{   // simple
    const username="saurabh"
        
        console.log(this.username); 
    
}
// chai2()



// const addtwo=(num1,num2)=>  num1+num2
 const addtwo=(num1,num2)=>{

     return  num1+num2
    }


console.log(addtwo(3, 5)); 