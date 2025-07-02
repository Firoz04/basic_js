//0!=1
//5!= 5*4*3*2*1=120
//6!=6*5*4*3*2*1=720
//6!=6*5!=720

function factorial(data){
    if(data == 0 || data==1){
        return 1;
    }else if(data<0){
        return "Invalid input!";
    }
   let result = data * factorial(data-1);
   //result = 5 * factorial(4)
   //result = 5 * 4 * factorial(3)
   //result = 5 * 4 * 3 factorial(2)
    //result = 5 * 4 * 3 *2 factorial(1)
    return result;
}
console.log("Result is:" + factorial(5));