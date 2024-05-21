function receivesAFunction(cb) {
    console.log(cb());
}
receivesAFunction( function() {return "I really hope I did this right"});

function returnsANamedFunction() {
    function namedFunction() {
        console.log("Check out this named function");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.")
    };
}