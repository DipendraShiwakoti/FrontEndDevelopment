function fun1(callback) {
    let promiseObjectAsync= new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("In timer")
            resolve("resolved")
        }, 3000)
})
return promiseObjectAsync;
}

function fun3() {
   console.log("in fun 3")
}

function fun2(){
    let p1 = fun1();
    p1.then((data)=> {
        fun3();
    }).catch((err)=>{
        console.log(err)
    })
}
fun2();
