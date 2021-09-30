/**
 * 实现bind方法
 * fn.bind(obj,参数1,参数2)
 */
let obj = {
    name: '要变瘦瘦的小猪猪',
    age: '33'
}
let name = 'hell'
function testBind(a, b, c) {
    console.log(a + b + c + `${this.name}`);
}
Function.prototype.myBind = function (obj) {
    if (typeof this !== 'function') {
        throw new TypeError('bind is only work for Function')
    }
    let first = Array.prototype.slice.call(arguments, 1);//因为第一个参数是obj
    let fn_ = function () { };
    let fn = this;//调用bind的函数
    fn_.prototype = fn.prototype;
    const bindFn = function () {
        let second = Array.prototype.slice.call(arguments);
        fn.apply(this.constructor === fn ? this : obj, first.concat(second));
        console.log(this);
    }
    bindFn.prototype = new fn_();
    return bindFn;
}

let bind = testBind.myBind(obj,1,2);
// bind(4);
const p = new bind(3);
console.log(p.name)