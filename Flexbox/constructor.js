// initialization of object
let obj = {};
// initilization of array
let arr = []
let arr1 = new Array()
let obj1 = new Object();
console.log(obj)
console.log(obj1)
console.log(arr1)

function Person(fName, lName,address, married,age){    // constructor function
    this.fName = fName;
    this.lName = lName;
    this.address = address;
    this.married = married;
    this.age = age;
}

let pers1 = new Person("Dipendra", "Shiwakoti", "USA", false,29)
console.log(pers1)