const arr = [5, 1, 3, 2, 6];
console.log(arr);

//double = [10,2,6,4,12]
//triple= [15,3,9,6,18]
//binary=["101", "001","011","010",]
function double(x){
    return x*2;
}

function triple(x) {
    return x*3
}


function binary(x){
    return x.toString(2);
}
//const output=arr.map(binary)
//console.log(output);
//console.log(arr);



//filter method

//filter odd values from given arraty

function isodd(x){
    return x%2;
}

function isEven(x){
    return x%2==0;
}

function gratter(x){
    return x>4
}

//const output = arr.filter(gratter)
//console.log(output);

//reduce


function sum(arr){
let sum =0;
for(let i =0;i<arr.length;i++){
    sum = sum+arr[i]
}
return sum;
}

///console.log(sum(arr));

//const output= arr.reduce(function(acc,curr){
//acc=acc+curr;
//return acc; 
//},0);

//console.log(output);


//ffinding maximum
function findMax(arr){
    let max=0;
    for(let i=0; i<arr.length;i++){
        if (arr[i]>max) {
            max=arr[i];
        }
    }
    return max
}

console.log(findMax(arr));

const output=arr.reduce(function(acc,curr){
if (curr>acc) {
    acc=curr
}
return acc
},0)

console.log(output  );