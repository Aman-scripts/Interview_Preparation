// Filter object by values > 50
// Input:{ a: 20, b: 60, c: 40, d: 90 }
// Output : { b: 60, d: 90 } {Able to solve this in the first attempt}


function objectValues(data){

    let result={}
    for(let key in data){
        if(data[key]>50){
            result[key]=data[key];
        }
    }
return result;
}

let values={ a: 20, b: 60, c: 40, d: 90 }
console.log(objectValues(values))