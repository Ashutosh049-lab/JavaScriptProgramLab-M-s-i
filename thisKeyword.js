


// this :- this is a keyWord in js that refers to the object that is executing the current function 

// let obj={
//     user:"Ashutosh",
//     greet:function(){
//         console.log("hello ",this.user)
//     }

// }

// obj.greet();
// without usages of this keyword , function always refers to the global object 


// arrow function:- arrow fun is fun and it is concise way or shorter syntax for writing function in js 

//  let add=(a,b)=>{
//     console.log(a+b);
//  }

//  add(1,3)


// note :- arrow fun does not have thier own this keyWord

// let obj={
//     user:"Ashutosh",
//     greet:function(){
//        let inner=()=>{
//            console.log("hello",this.user);
//        }

//        inner();

//    }
// }

// obj.greet()

// note:- arrow function always inherit from the surrounding scope


// greet=function(greeting){
//     console.log("hello",this.user,greeting);
// }

// let obj1={
//     user:"Ashutosh"
// }


// let obj2={
//     user:"Rahul"
// }


// let obj3={
//     user:"Karan"
// }

// greet.call(obj3,"Good Morning")

// function method :- call,apply,bind, they basically helps with pointing the this keyWord in disired direction


// call:- call method is passed first fun or obj and then parameter(optional)

// apply:- apply and call both are same but apply is passed array as parameter let supposed if you have only one parameter
//  then you can use call method but if you have many parameter so you can use apply to the better 


// greet = function(greeting,phone) {
//     console.log("hello", this.user, greeting,phone);
// }

// let obj1={
//     user:"Ashutosh"
// }


// let obj2={
//     user:"Rahul"
// }


// let obj3={
//     user:"Karan"
// }

// greet.apply(obj3,[1,2])


// bind=// ──────────────── bind() ────────────────
// ➤ bind() does NOT call the function immediately.
// ➤ It returns a new function with `this` permanently set to the provided context.
// ➤ You can call the returned function later.


greet = function(greeting,phone) {
    console.log( "hello", this.user, greeting,phone);
}

let obj1={
    user:"Ashutosh"
}


let obj2={
    user:"Rahul"
}


let obj3={
    user:"Karan"
}

let binded=greet.bind(obj3,1,2);

binded()

