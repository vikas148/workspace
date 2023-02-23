var talk = function(fx){
    fx();
}

var sayhi =  function(){
    console.log("hi");
}

talk(sayhi)

// 2nd example
let a,b;
var calc =function(fx,a,b){
    return fx(a,b);
}

var sum = function(a,b){
    return a+b;
}
var diff = function(a,b){
    return a-b;
}
console.log(calc(sum,4,5));
console.log(calc(diff,4,5));

