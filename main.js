function sum(x,y,z,w){
    return x+y+z+w;
}

function multiply(x,y,z,w){
    return x*y*z*w;
}


function bye(){
    console.log("Bye Bye")
}

function differenceT10(x,y){
    return x-y; // update
}

function greeting(){
    console.log("Hi T17");
}

function power(x,y){
    if(!(x > 0 && y > 0)){
        return "it has to be positive numbers";
    }
    let result = 1;
    for(let i = 0; i < y; i++){
        result *= x;
    } 
    return result;
}

const operation = () => {
    console.log("start operation");
    console.log("operation .......");
}

const addOperation = () => {
    console.log("add op");
}

const divOperatoin = () => {
    console.log("divide operation")
}

const welcome = () => {
    console.log("Welcome everyone");
}

const greeting = () => {
    console.log("Hello");
}

const farewell = () => {
    console.log("Bye");
}

const noSESummer= () => {
    console.log("isallah no SE summer for us");
}

const midtermResults= () => {
    console.log("isallah good midterm grades has appeared");
}

