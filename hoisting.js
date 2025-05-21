

// variable hoisting:- variable can be use before the creating

// console.log(a);
// var a=10

// console.log(a)


// function hoisting:-function can be use before the creating. why because of function declaration are moved on their scope before executing

  hello();

  function hello(){
    console.log("hello")
  }



//  Variables declared with let and const are also hoisted but not initialized. 
// If accessed before declaration, a ReferenceError will be thrown due to the Temporal Dead Zone (TDZ).

