function fun(){
    console.log(`Called the function fun`);
    return function cleanUP(){
        console.log(`Cleaning up the resources`);
    }
}

const result = fun();
 
result(); 
//you call cleanup like this

/**
 * What is stored inside result ?
 * It stores the function returned by fun i.e. cleanUP
 */