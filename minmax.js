//12, 33, 10, 1, 9, 15
function getMax(array){
    let maximumValue = array[0];
     for(let i=1; i<array.length; i++){
            if(array[i]>maximumValue){
                maximumValue = array[i];
            }        
     }
     console.log(`Maximum value of the array is: ${maximumValue}`);
}
getMax([12, 33, 10, 1, 9, 15]);


//min
function getMin(array){
    let minimumValue = array[0];
     for(let i=1; i<array.length; i++){
            if(array[i] < minimumValue){
                minimumValue = array[i];
            }        
     }
     console.log(`Minimum value of the array is: ${minimumValue}`);
}
getMin([12, 33, 10, 1, 9, 15]);
