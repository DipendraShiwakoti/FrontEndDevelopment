// function getData(){
//   let promise =  fetch('https://jsonplaceholder.typicode.com/todos/1');
//   promise.then(res=>{
//     console.log(res)
//    return res.json()
//   }).then((data)=>{
//     console.log(data)
//   }).catch(err=>{
//     console.log(err)
//   })
// }
// getData();


// function postData(){
//     let data ={
//         title:"X",
//         completed:false,
//         userID:1
//     }
//     let promise =  fetch('https://jsonplaceholder.typicode.com/todos/1',{
//     method: "POST",
//     body:JSON.stringify(data),
//     headers:{
//         "Accept":'application/json',
//         'content-Type':'application/json'
//     }
//     });
//     promise.then(res=>{
//         console.log("Api Success")
//     })
//   }
//   postData();


// async function getData () {
//     return 1;
// }
// let promise = getData();
// promise.then(data=>{
//     console.log(data)
// })
// getData()


// async function getData() {
//     let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await res.json();
//     console.log("XYZ")
//     console.log(data)
// }
// getData()


function convert( num,  base) {
    if (num == 0){
    return " "
    }
    else {
    return convert(num / base, base) + (num % base);
    }
 }

convert(10,2);
console.log("My name")