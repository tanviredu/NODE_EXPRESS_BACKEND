// arrow function

let hello = ()=>{
    console.log("welcome to the calculator");
}
let add = (num1,num2)=>{
    return num1+num2;
}
let subtract = (num1,num2) =>{
    return num1-num2;
}
let multiply = (num1,num2)=>{
    return num1*num2;
}

let divide = (num1,num2)=>{
    return num1/num2
}

function work(){
    let addvalue = add(100,200);
    console.log(addvalue);
    let subvalue = subtract(200,100);
    console.log(subvalue);
    let mulvalue = multiply(10,10)
    console.log(mulvalue);
    let divvalue = divide(10,10);
    console.log(divvalue)
}

work()




