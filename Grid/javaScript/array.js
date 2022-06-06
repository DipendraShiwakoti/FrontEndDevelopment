// var numbers = [1, 2, 4,7, 9, 12];
// for(let i = 0; i< numbers.length; i++){
//    numbers[i] = numbers[i] * 2
// }
// console.log("Double array is " + numbers)

var numbers = [1, 2, 4,7, 9, 12];
let new_array = [];
for(let i = 0; i< numbers.length; i++){
   new_array.push(numbers[i]*2)
}
console.log("Double array is " + new_array)