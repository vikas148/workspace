import _ from "lodash"

const members = [
    {name: 'Vijay ',lastName:"Gupta", age: 20},
    {name: 'Yash ',lastName:"Jangid", age: 40},
    {name: 'Firoz',lastName:" Khan", age: 41},
    {name: 'Amrit ',lastName:"Srivastava", age: 17},
    {name: 'Chandraprakash ',lastName:"Sharma",age:21 },
    {name: 'Swpril ',lastName:"Ahuja", age: 45},
    {name: 'Yogesh ',lastName:"Khatri", age: 51}
  ];


//   let users =_.filter(members, function(o) { return !o.name; });
  let users =_.filter(members, { 'age': 20});
  console.log(users);