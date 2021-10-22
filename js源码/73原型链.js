function A() {}

A.prototype.x = 10;

var a1 = new A();

A.prototype = { x: 20, y: 30 };

var a2 = new A();

console.log(a1.x);//10

console.log(a1.y);//undefined

console.log(a2.x);//20

console.log(a2.y);//30

Function.prototype.x = 'xx'
function Fn() {

}
const fn = new Fn()
console.log(fn.x)//undefined
console.log(Fn.x)//xx