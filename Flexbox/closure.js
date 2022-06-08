// function outer(a){
//     function inner(b){
//         console.log(a)
//     }
//     inner(30);

// }
// outer(100)

// function outer(a){
//     let  inner=(b)=>{
//         console.log(a)
//     }
//     return inner;

// }
// let fun = outer(100)
// console.log(fun)


// function unitConversion(unitPer){
//     return funciotn (noOfunits){
//         return unitPer * noOfunits
//     }
// }
        
// const mToCM = unitConversion(100)

//currying


function unitConversion (unitPer) {
    return function (noOfUnits){
       return  unitPer * noOfUnits
    }
}
const mToCm = unitConversion(100)
console.log(mToCm(5))



