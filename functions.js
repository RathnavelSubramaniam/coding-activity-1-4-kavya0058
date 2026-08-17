function add(x,y) {
    return ( x + y) ;
}
console.log(add(3,2));

function greet(name) {
    return ("Hello "+ name);
}
console.log(greet("Dharani"));


function isString(value) {
    if(typeof value === "string"){
        return "strings";
    }else{
        return "not strings";
    }
}
console.log(isString(123));