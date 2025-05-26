





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
  





