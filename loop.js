//do,while,do while, for
//while
console.log("While loop");
function variables(){
    const test1= ["Hello world!",10,"test",75,["one",5,"two"]];
    
    let i=0;
    while(i< test1.length){
        console.log(`Current data for index ${i} is: ${test1[i]}`);
        i++;
    }
    
}
variables();
console.log(" \n");
console.log("For loop");

//for
function variable(){
    const test1= ["Hello world!",10,"test",75,["one",5,"two"]];
    
    for(let i=0;i<test1.length;i++){
        console.log(`Current data for index ${i} is: ${test1[i]}`);
    }
    
}
variable();