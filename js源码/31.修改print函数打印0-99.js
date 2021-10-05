/**
 * 1. 只能修改setTimeout 到Math.floor(Math.random()*1000)的代码
 * 2. 不能修改Math.floor(Math.random()*1000)
 * 3. 不能使用全局变量
 */
function print(n) {
    setTimeout(() => {
        console.log(n)
    }, Math.floor(Math.random() * 1000))
}
// for (var i = 0; i < 100; i++) {
//     print(i)
// }
/**
 * setTimeout传参数
 */
setTimeout((a,b,c)=>{
    console.log(a,b,c)
},500,'My','name','is xll')
//解法一 
function print1(n) {
    setTimeout( () => {
        console.log(n)
    }, 1,Math.floor(Math.random() * 1000))
}
for (var i = 0; i < 100; i++) {
    print1(i)
}
//解法二  异步函数
function print2(n) {
    setTimeout(async ()=>{
        await console.log(n)
    }),Math.floor(Math.random()*1000)
}
for(var i=0;i<100;i++) {
    print2(i);
}
