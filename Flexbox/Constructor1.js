
const Person = function(fName, lName){
    this.firstName= fName;
    this.lastName = lName;
}
const Person1 = new Person("Dipendra", 2);
const Person2 = new Person(2, "Shiwakoti");
console.log(Person1);
console.log(Person2);


// const arr = new Array(1,2,3,4);
// console.log(arr.__proto__);
// arr.map((a) => console.log(a))



const request = new SMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/usa");
request.send();
console.log(request);
console.log("I am going to fetch data");
request.addEventListener("load", ()=>{
    const data = JSON.parse(request.reponseText);
    console.log(data[o].name.common)
});
console.log("I completed fectching data");

// callback hell