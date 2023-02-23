//defining Object
let person ={
    f_name: "Vikas",
    L_name: "bairwa",

    //method

    getFunction : function(){
        return (`The name of the person is ${person.f_name} ${person.L_name}`)
    },

    //object within object

    phone_number: {
        mobile: '12345654',
        landline:'876542234'

    }
}


console.log(person.getFunction());
console.log(person.phone_number.landline);