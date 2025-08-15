try{
const divident =Number(window.prompt("Enter a divident"))
const divisor =Number(window.prompt("Enter a divisor"))
if(divisor==0){
    throw new Error("divisor must not be zero")
}
if(isNaN(divident) || isNaN(divisor)){
    throw new Error("Value must be a number")
}

const result = divident/divisor
console.log(result)
}
catch(error){
    console.error(error)

}
console.log("you have reached the end!")
