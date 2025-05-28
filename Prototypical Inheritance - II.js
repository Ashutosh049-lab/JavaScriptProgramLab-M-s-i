
// class Bank{
//     #pin
//     constructor(name,adhaar,pin){
//         this.name=name
//         this.adhaar=adhaar
//         this.#pin=pin;
//     }
// }
// // # it used to do private feilds 
// let account1=new Bank("bheem","sdfs213",1234)
// console.log(account1);

// get and set methods

class Bank{
    #pin
    #kyc
    constructor(name,adhaar,pin){
        this.name=name
        this.adhaar=adhaar
        this.#pin=pin;
        this.#kyc=false;
    }

    get kyc(){

        return this.#kyc
    }

    set pin(cred){

        if(cred.dhaar==this.adhaar && cred.oPin==this.#pin){
            this.#pin=cred.updatedPin
        }else{
            return "invalid"
        }
    }
}
// # it used to do private feilds 
let account1=new Bank("bheem","sdfs213",1234)


let obj={
    adhaar:"sdfs213",
    opin:1234,
    updatedPin:4567

}
account1.pin=obj
console.log(account1)

