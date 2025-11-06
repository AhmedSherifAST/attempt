function sum(x,y,z){
    return x+y+z;
}

function multiply(x,y,z){
    return x*y*z;
}

function difference(x,y){
    if(y>x){
        return "first number should be greater";
    }
    return x-y;
}
function division(x,y){
    if(y == 0){
        return "cannot divide by zero";
    }
    return x / y;
}

function powerBy3(x){
    return x*x*x;
}

function powerby2(x){
    return x * x;
}


function greeting(){
    console.log("Hi");
}

function power(x,y){
    let output = 1;
    for(let j = 0; j < y; j++){
        output *= x;
    } 
    return output;
}

const operation = () => {
    console.log("operation");
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

