// //Promise states
// //Pending
// //Fulfilled
// //rejected


// let p = new Promise((resolve, reject) =>{
//     resolve("resolved");
// });
// console.log(p)

// let x = 10;
// let promiseObjectAsync= new Promise((resolve, reject) =>{
//     if (x < 10){
//     setTimeout(()=>{
//         resolve("resolved")
//     }, 3000)
// }else {
//     setTimeout(()=>{
//         reject("rejected")
//     }, 3000)
// }
// });
// //console.log(promiseObjectAsync);

// promiseObjectAsync.then((data)=>{
//     console.log(promiseObjectAsync)
//     console.log(data, "=======data")
// });


//Promise states:
//Pending
//Fulfilled
//rejected

let promiseObject = new Promise((res, rej) => {
    res("resolved");
})

let x = 1;
let promiseObjectAsync = new Promise((res, rej) => {
    if (x < 10) {
        setTimeout(() => {
            res("resolved")
        }, 4000)
    } else {
        setTimeout(() => {
            rej("rejected")
        }, 4000)
    }

})

promiseObjectAsync
    .then((data) => {
        console.log(promiseObjectAsync)
        console.log(`data=${data}`)
    }).catch((err) => {
        console.log(`Error=${err}`)
    })
