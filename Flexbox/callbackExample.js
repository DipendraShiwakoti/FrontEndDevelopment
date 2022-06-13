//Using Callback: Purpose is to call fun3 after seTimeout executed 

function fun1(callback) {
    setTimeout(() => {
        console.log("in timer")
        if (typeof callback === "function") {
            callback()
        }
    }, 4000)
    let x = 10;
    console.log(x);
}

function fun3() {
    console.log("In fun3")
}

function fun2() {
    fun1(fun3);
    //fun3()
}

fun2()



// web api=>front end
//rest api=> create, retrive, update,delete=.=> acts for front end as well as back end
// fetch api=> front end api=> front end