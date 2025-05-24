// 24/05/25
//=========== about constructor==========================

// function carFactory(title,color){

//     let obj={};

//     obj.title=title;
//     obj.color=color;
//     obj.horn=function(){
//         console.log("honk honk !!")
//     };
//     return obj;
// }

// let car=carFactory("BMW","red","sound")
// console.log(car)
// car.horn()



//==================Constructor============================

// function CarFactory(title,color){

//     this.title=title
//     this.color=color
//     this.horn=function(){
//         console.log("honk honk !!");
//     };

// }

// let car1=new CarFactory("BMW","Red");
// console.log(car1);
// car1.horn()



/// ============constructor class =================

// class Car{
//    constructor(title,color){
//     this.title=title;
//     this.color=color;
//     this.horn=function(){
//         console.log(`title:${this.title} color:${this.color}`)
//     }

//    }
// }

// let car1=new Car("BMW","Red");
// car1.horn()



//  


class CarFactory{

    constructor(title,color){
      this.title=title;
      this.color=color;
      this.numPlate=CarFactory.numPlate()
    }
    horn(){
        console.log(this.title,"blowing horn")
    }

    static numPlate(){
        return Math.floor(1000+(Math.random()*1000))
    }
}

let car1=new CarFactory("BMW","Red");
console.log(car1);
car1.horn()