// for loop

for(let index=0;index<=10;index++){
//     console.log(index);
}

for (let i=0;i<10;i++){
    if(i==5){
        // console.log("5 is best number");
    }
    // console.log(i)
}

for (let i=1;i<=120;i++){
    
    // console.log(`Outer loop value ${i}`);
    for(let j=1;j<=10;j++){

        // console.log(i,'*',j,"=",i*j);
    }
    
}

const myArray=["saurabh","sandeep","sachin","suraj"]
for(let i=0;i<myArray.length;i++){
    const element = myArray[i]
    // console.log(element)
    // console.log(myArray[1])
}

// Break And Continue

 for (let i=0;i<10;i++){
    if (i==5){

        console.log("Detected 5")
        break
    }
    console.log(i)
}
 for (let i=0;i<10;i++){
    if (i==5){
        continue
    }
    console.log(i)
}
