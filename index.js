const receivesAFunction = (callback) =>{
    callback()
}
const returnsANamedFunction = () =>{
    return function f(){}
}
const returnsAnAnonymousFunction = () =>{
    return (()=>{})
}