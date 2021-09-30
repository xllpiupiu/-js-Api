/**
 * new 使用Js原生实现
 */
function Parent(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    }
}
const _new = function (Parent, ...rest) {
    //1.以构造器Parent的prototype为原型创建新对象
    const child = Object.create(Parent.prototype);
    //2. 将this和调用参数传给构造器执行
    const result = Parent.apply(child, rest);
    return typeof result === 'object' ? result : child;
}
const p1 = _new(Parent,'www','23');
console.log(p1);
p1.sayName(); 