function oddEven1(data){
    for(let i=0; i<data.length; i++){
        data[i]==0? console.log(`${data[i]} is even number`)
        :data[i]%2==0? console.log(`${data[i]} is an even number`)
        :console.log(`${data[i]} is odd number`);
        
    }
}

oddEven1([20,2,3,4,2,4,7,9,44,0]);

// ":" ->else
// ":...?" ->else if
// "...?" ->if
