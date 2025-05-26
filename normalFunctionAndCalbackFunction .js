
 
 
// diference b/w normal fun calling and calback fun .
// 4
// hii
// 6
// hello



//use normal fun calling

// function hii() {
//   console.log("hii");
// }

// function hello() {
//   console.log("hello");
// }

// function cal(a, b) {
//   console.log(a + b);
// }

// // Normal calling
// cal(1, 3);  // prints 4
// hii();      // prints hii
// cal(1, 5);  // prints 6
// hello();    // prints hello






// using call back function

function hii(){
  console.log("hii..");
}

function hello(){
  console.log("hello...");
}

function cal(a,b,calback,delay){
  
  setTimeout(()=>{
    console.log(a+b);
    calback()
    
  },delay);
}


cal(1,3,hii,0)
cal(1,5,hello,0)





// | **Feature**          | **Normal Function Call** | **Callback Function (with `setTimeout`)**    |
// | -------------------- | ------------------------ | -------------------------------------------- |
// | **Execution Order**  | Synchronous, in order    | Asynchronous (delayed)                       |
// | **Flexibility**      | Limited to fixed order   | Can run after delay/event completes          |
// | **Example Use Case** | Simple calculations      | Network requests, animations, event handling |
