

// a promise is an object that represents the eventual completion or failure of an asynchronous operation

// promise is a promise of code execution, the code either execute or reject;

// promise is used to solve the cllbacck hell problem.

let promise= new Promise( function(resolve,reject){

  console.log("promise is created");
  //resolve(56);

  reject("error")
});

console.log("first");

setTimeout(function(){
  console.log("second");
},2000);

console.log("third");

console.log(promise);

