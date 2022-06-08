 import {data} from './data'

console.log("hello World")
console.log("my name is Dipendra")
const result = data.filter((item,index) => {
   return (item.completed === false)

})
console.log(result)

