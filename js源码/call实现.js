/**
 * https://www.cnblogs.com/echolun/p/12144344.html
 * js模拟实现call方法
 */
var name = 'ang'
console.log(name)
let obj = {
    name: 'xll',
    age: '13'
}
function testMyCall(a,b,c) {
    console.log(a+b+c+`${this.name}`);
}
testMyCall.call(obj,1,2,3);

Function.prototype.myCall = function (obj) {
    if (!obj) {
        obj = window;
    }
    // let args = [];
    obj.func = this;//使用了myCall方法的函数
    // for (let i = 1; i < arguments.length; i++) {
    //     args.push("arguments["+i+"]");
    // }
    // eval("obj.func("+args+")");
    let arr = Array.prototype.slice.call(arguments,1);
    obj.func(...arr);
    delete obj.func;
}
testMyCall.myCall(obj,1,1,1)