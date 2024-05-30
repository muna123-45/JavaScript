//Scope

// global scope :
let globalVariable = "Hey I am Global";

function funscope(){
    //function scope
    let myProps = "It's mine";
    console.log(globalVariable);
    console.log(myProps);
}
console.log(globalVariable);
// console.log(myProps);
// let resultScope = funscope();// function call whenever return(variable)
// console.log(resultScope);

//right way
funscope();