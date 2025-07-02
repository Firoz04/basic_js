//5!= 5*4*3*2*1=120
//6!=6*5*4*3*2*1=720
//6!=6*5!=720

function factorial(data){
    
    let result = 1 //1*2*3*4*5
    for(let i=1; i<=data; i++){
        result = result * i;
    }
        console.log("Result is:" + result);
    
}
factorial(5);