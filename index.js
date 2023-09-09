function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {  
    let fn = function() {
        console.log("returning");
    }
    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('anonymous');
}
}