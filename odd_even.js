function oddEven(){
    const data= [20,2,3,4,2,4,7,9,44,0];
    for(let i=0; i<data.length; i++){
        if(data[i]==0){
            console.log(`${data[i]} is even number`);
        }
        else if(data[i]%2==0){
            console.log(`${data[i]} is an even number`);
        }else{
            console.log(`${data[i]} is odd number`);
        }
    }
} 
oddEven();

//function parameterized
function oddEven1(data){
    for(let i=0; i<data.length; i++){
        if(data[i]==0){
            console.log(`${data[i]} is even number`);
        }
        else if(data[i]%2==0){
            console.log(`${data[i]} is an even number`);
        }else{
            console.log(`${data[i]} is odd number`);
        }
    }
}
//parameter 
oddEven1([20,2,3,4,2,4,7,9,44,0]);