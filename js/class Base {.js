class Base {
  a = "string";
  fun() {
    console.log(this);
    function test(){
     console.log(this);
    }
    test()

    // tt(this)
    // var test2=()=>{
    //     console.log(this);
    // }
    // test2()
  }
}

var a= new Base()

const tt  = (parent) => {
    console.log(parent)
}

tt();
a.fun()
