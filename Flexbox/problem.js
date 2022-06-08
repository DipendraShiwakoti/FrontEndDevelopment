// function russianRoulette(n){
//     return function(){
//         return function() {
//             console.log("I am good")
//         }
        
//     };
// }
// const result = russianRoulette()()();



// function russianRoulette(n){
//     let counter = 0;
//     return function(){
//         counter++;
//         console.log(counter)
//         if(counter < n){
//           return "bang"  
//         } else if(counter ===n){
//             return "click"
//         } else if(counter > n){
//             return "reload to play again"
//         }
        
//     };
// }
// const result = russianRoulette(4);
// console.log(result());
// console.log(result())
// console.log(result())
// console.log(result())
// console.log(result())
// console.log(result())



// const upperFirstWord = function(str) {
//     return str.replace(/ /g, "").toLowerCase();
// };
// const myOne = function(str) {
//     const [one, ...other] = str.split(" ");
//     return [one.toUpperCase(), ...other].join(" ")
// };
// const result = upperFirstWord("Javascript is awesome");
// console.log(result);

// const One = myOne("Javascript is awesome");
// console.log(One);


// const transformer = function(a) {
//     console.log(a("Hello There"))
// };
// transformer(transformer);


[1,2,3,].map((Element,i,arr) => {
console.log(arr);
});

// const str = new String("hello");
// [...str].map((Element,i,arr) => {
//     console.log(element);
//     });

// immediately invoked function expression(IIFE)
(function(){
    console.log("hello")
})();