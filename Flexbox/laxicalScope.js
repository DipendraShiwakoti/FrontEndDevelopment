let a = 10;
let c = 21;

function test1(){
    let a = 11;
    let b = 12;
    function innerTest(){
        let a = 12;
        console.log(a,b,c);
    }
    innerTest()
}
test1()