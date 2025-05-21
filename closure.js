
function counter(){

    let count=0;

    function child(){
        count++;
        return count;
    }

    return child;
}

let counting=counter();
console.log(counting())
console.log(counting())