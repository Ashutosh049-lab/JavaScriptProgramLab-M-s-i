





// Date== 30/01/2025


// // creation function

// function add(a,b){   // syntax of fun

//     console.log(a,b);
// }

// // call fun 
// //add();

// // arg and parameter
// add(4,5)
// add(6,4)

// // parameter:-
// //argument:-


// create fun for max

// function max(arr){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         let len=arr[i].length;
//         if(len>max){
//             max=len
//         }
//     }
//     console.log(max);
// }

// let arr=["abc","cbdf"];
// max(arr)



// create fun for basic calcutation

// function calculation(a,b,operator){
//     // "+"
//     // "*"

//     if("+"== operator){
//         console.log(a+b);
//     }else if("-"== operator){
//         console.log(a-b);

//     }else if("*"== operator){
//         console.log(a*b);
//     }
// }
// calculation(1,2,"+")


// return satatment

// function add(a,b){
//     return a+b;// it is store the value 
   
// }

// console.log(add(3,4))

// // return rull;-
// - there should be only one return stat in the fun
// - any code below return stat won't work if return stat



// let val= function(user){
//     return `Hello :${user}`;  // ` is called backticks
// }

//  console.log(val("Ashutosh"));
// anonymous fun- without fun name is called anonymous fun



// function greetUser(){
//      let name=prompt("Enter the name:")
//     //let name="Guest"  
//     if(name.length>0){
        
//       console.log(`Hello, ${name}!`)
//     }else{
//         name="Guest"
//       console.log(`Hello, ${name}!`)
//     }
//    }
   
//    greetUser()


/// date=31/01/2025

// let arr=[1,2,3,false,"a",false]

//=== primitive
// pass by value = copy of original value passed
// non-primitive
// pass by reference = passed original value and also original value can change
// for of loop(let i in arr)
// switch case
// ternary operator


// Date=01/02/2025

// multidimensional array


// 5/2/25


// object about
// mapping with object
// pro- cal frequency
//object - it is a collection of key and value pairs


// let classroom={

// }


// array- sequence based rather than unique identifier based

//object-
// let obj={
//     firstName:"Dholu",
//     lastname:"Jaiswal",
//     phone:6263938111,
//     subject:"Math",
//     hobby:"cricket"
// }


// accessoing in object

//1. Dot Notation
//console.log(obj.subject);

// // 2. sq.Notation
 //console.log(obj["hobby"]);

// // key are suppose to be unique

// //obj.marks=90;
// obj["marks"]=85;// add new key and value
// obj.lastname="shah"// update

// delete obj.hobby// delete 

// // objects are mutaible

// console.log(obj)

// for in loop


// let obj={
//     firstName:"Dholu",
//     lastname:"Jaiswal",
//     phone:6263938111,
//     subject:"Math",
//     hobby:"cricket"
// }

// for(let key in obj){
//     console.log(key+" : "+obj[key])
//     //console.log(`${key} : ${obj[key]}`)
// }
//object- to iterate over them we use a for in

// for(let key in obj){
//     console.log(obj[key]);
// }


// Mapping with obj

// let arr=["a","b","c","d","e"]
// let mappingObj={};

// for(let i=0;i<arr.length;i++){
//     let value=arr[i];
//     let key =i+1;

//     mappingObj[key]=value;  // dunamic key access
// }
//  console.log(mappingObj);


// Date=06/02/25

// object with inside function
// use of this
// inbuilt methods:-
// split(),join(),charAt(),include(),trim()
//slice,splice
//
// ternary op


// let cal={
//     a:1,
//     b:2,
//     add : function(a,b){
//         return a+this.b
//     }
// }
// console.log(cal.add(10))


// 14/02/2025
// topic:-error
//15/02/2025
//number System and memory

//18/02/2025


// 21/02/25

// Array and String

// 25/02/25
//subarray and substring








///////////////  29/04/25

// function fun(a,b){
//     console.log(a+b);
// }
// fun(1,2)




//arrow function
// let sumOfarray=(arr)=>{
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// let arr=[1,2,3];
// let sum1=sumOfarray(arr);
// console.log(sum1);


// let greet=(fn,ln)=>"hey "+fn+" "+ln+" "+"welcome"

// console.log(greet("Ashutosh","Jaiswal"));

// arrow fuction must not be used as object methods

// destructure



//
// let a=10;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b)



// 02/05/25  js

// let count=0;

// function counter(){
//     count++;
//     console.log(count);
// }
// counter();
// counter();

// but there is some thing is wrong because count is global var 
// so we can munipulate the value of count that why closure comes
//  into the picture


// this keyWord  === 04/05/25

// let age=18;
// let greet={
//     age:50,
//     add:function(){
          
//           console.log(this.age);
//     }
// }
// greet.add();


// closure example:i-

// function outer(){
//     let age=17;  // lexical scope

//     function inner(){

//         age++;
//         console.log(age);

//     }
//     return inner;
// }

// let temp=outer();
// temp();
// temp();

// let obj1={
//     a:10,
//     b:20
//   }
  
//   let obj2={
//     c:30,
  
//   }
  
//   obj1.__proto__=obj2;
  
//   console.log(obj1.c)




















// ====================callback function======================================

function hii(data){
    console.log("Hi...");
}

function hello(){
    console.log("hello");
}

function calculation(a,b,callback,delay){

    
   // console.log(a+b);
   setTimeout(()=>{
     console.log(a+b);
       callback(); 
       //hii()
   },delay)
    
}


calculation(1,3,hii,2000)
calculation(1,5,hello,10000)
  

 //and using setIntervals()

//  function hii(data){
//     console.log("Hi...");
// }

// function hello(){
//     console.log("hello");
// }


// function calculation(a,b,callback){
// let count=0;
    
//    // console.log(a+b);
//   let id= setInterval(()=>{
//      console.log(a+b);
//      count++;
//      if(count==4){
//         clearInterval(id)  // it use for stop interval
//      }
//        callback();

//    },4000)
    
// }


// calculation(1,2,hii)
// calculation(1,5,hello)
  













 //============= promise================

//  let myPromise=new Promise((resolve,reject)=>{
//      // resolve("completed")
//       reject("error")

//  })


 //console.log(myPromise)

//  let delivery=new Promise((res,rej)=>{

//    let apiCall=true;

//    setTimeout(()=>{
//       if(apiCall){
//          res("delivery is on the way");
//       }else{
//          rej("order not place")
//       }
//    },5000)
//  })

 //console.log(delivery);

 // promise handle
 // .then -> it basically runs when the promise tends to resolve
 // .catch-> it runs when the promise tend to get rejected

// delivery
//  .then((param)=>{
//      console.log("resolve",param)
//  })
//  .catch((param)=>{
//     console.log("reject",param)
//  })

//  .finally(()=>{
//      console.log("please be aware")
//  })

 // .finally()-it is used to both either resolve or reject




 // ======================= Api Call=====================


//  let DB=[
//    {
//       id:1,
//       user:"A"
//    },
    
//    {
//       id:2,
//       user:"B"
//    },
//     {
//       id:3,
//       user:"C"
//    },
//     {
//       id:4,
//       user:"D"
//    }
//  ]


//  let Api=new Promise((resolve,reject)=>{
     
//    let server=true;
//    setTimeout(()=>{
//       if(server){
//          resolve(DB)
//       }else{
//          reject("404 not found");
//       }
//    },2000)
//  })



 // handle the above promise foe both rsolve and rejcet

//  Api
//  .then((param)=>{
//    console.log("resolve",param)


//    param.forEach((ele,i) => {
//       console.log(ele.user)
//    });
//  })

//  .catch((param)=>{
//    console.log("reject",param)
//  })

//  .finally(()=>{
//    console.log("aware!")
//  })




// function message(){
//    console.log(message);
// }
// function timer(onComplete,duration){

//    setTimeout(()=>{
//      onComplete() 
//    },duration);
// }


// timer(message,5000)


// function message(){
//     console.log("message");
// }

// function Timer(callback,delay){
//    setTimeout(()=>{
     
//        callback();
//    },delay)
    
// }
// Timer(message,2000)



// function counter(){

//     let count=0;

//     function child(){
//         count++;
//         return  count;
//     }

//     return child;
// }

//let counting=counter();
// console.log(counting)
// console.log(counting())
    

