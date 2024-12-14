function Add(...args){//three dots represents rest operator where it takes multiple values.
    let result=0;
    for(let arg of args)
    {
        result=result+arg;
    }
    return result;
}
console.log(Add(10,20,30,40,50));