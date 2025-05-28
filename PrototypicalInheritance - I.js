
// inheritance

// let obj1={
//     a:10,
//     b:20
// }


// let obj2={
//    c:30,
// }

// using this way we can change
// proto after the obj creation
// from obj.proto to obj2
// obj1.__proto__ =obj2

// console.log(obj1.c)


let obj1={
    a:10,
    b:20
}


let obj2={
   c:30,
}

Object.prototype.d=40;

console.log(obj1.d);
console.log(obj2.d);

