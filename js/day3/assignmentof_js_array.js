
const members = [
    {name: 'Vijay ',lastName:"Gupta", age: 20},
    {name: 'Yash ',lastName:"Jangid", age: 40},
    {name: 'Firoz',lastName:" Khan", age: 41},
    {name: 'Amrit ',lastName:"Srivastava", age: 17},
    {name: 'Chandraprakash ',lastName:"Sharma",age:21 },
    {name: 'Swpril ',lastName:"Ahuja", age: 45},
    {name: 'Yogesh ',lastName:"Khatri", age: 51}
  ];

 const Fullname=function(x){
return x.name + x.lastName
 }

 const output=members.map(Fullname)
 //console.log(output);

//question 1
 const firstName= members.map(function(x){
    return x.name
 })
 //console.log(firstName);
 

//question 2
const upperLname=members.map((x)=>{
    return x.name + x.lastName.toUpperCase();
})

console.log(upperLname);


//question 3

const Agebw=members.filter((x)=>x.age>41&&x.age<60).map((x)=>x.name + x.lastName)

console.log(Agebw);


//question 4

var avg= members.map((x)=>{
    return x.age
});
console.log(avg);
// console.log(typeof(avg));
function calculate(){
    let sum=0
for(let i =0;i<avg.length;i++){
     sum=sum+avg[i]
}
return sum
}
console.log(calculate());
let sum =avg.reduce(calculate)
let avgAge = sum/avg.length;
console.log(avgAge);



//question 5

const maxAge= members.reduce(function(acc,curr){
    if (curr>acc) {
        acc=curr
    }
    return acc.name + acc.lastName
})

console.log(maxAge);

//question 6

const oldPeople =members.filter((x)=>x.age>35).map((x)=>x.name + x.lastName)
console.log(oldPeople);

const youngPeople = members.filter((x)=>x.age<35).map((x)=>x.name + x.lastName)
console.log(youngPeople);

const yandOld=[youngPeople,oldPeople]
console.log(yandOld);

//question 7
console.log(members);
const q7={name: 'Mansi ',lastName:"veerma", age: 19}
members.splice(2,0,q7)
console.log(members);

//question 8
const element1 = members[0];
const element2=members[1]
 console.log(element1);
 console.log(element2);

 //question 9
 let q9 = members
 q9.unshift(q7)
 console.log(q9);

 //questin 10

 //var name  = members[4].name
 //let lastName=members[4].lastName
 //let age =members[4].age

 //console.log(name,lastName,age);

 //question 11
const {name: Name,lastName: Lname}=members[0]

//question 12

const {name,lastName,age}=members[0]
console.log(name,lastName,age);


//question 13





//question 14

let q14 = members.reduce((acc,curr)=>acc.concat(curr))
console.log(q14);