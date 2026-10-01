const userEmail = "saurabh@gmail.com";
if (userEmail ) {
    console.log("user email is valid");
} else {
    console.log("user email is not valid");
}


// truthy valuse => 
    // "0" => string zero
    // 'false' => false string
    // "" => empty string
    // null
    // undefined
    // NaN



//  falsy values =>
    // false
    // 0
    // -0
    // 0n (BigInt)
    // "", '', `` (empty strings)
    // null
    // undefined
    // NaN

    let val1;
    val1=5??10
    console.log(val1);
    val1=0??10
    console.log(val1);
    val1=null??10
    console.log(val1);