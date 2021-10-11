class Father1 {
    
}
class Son1 extends Father1 {
    
}
let person1 = new Son1()
console.log('person1: ', Son1.__proto__);
/**
 * ES5的继承先生成了子类实例，再调用父类的构造函数修饰子类实例
 * ES6的继承先生成了父类实例，再调用子类的构造函数修饰父类
 */