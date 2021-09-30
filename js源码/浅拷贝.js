/**
 *复杂数据类型才有浅拷贝深拷贝的说法
 *因为复杂数据类型是用指针指向堆中的一块内存的
 */
let obj = {
    'a':'a',
    'b':{
        'name':'bbb',
        'age':12
    }
}
/**
 * 1. for循环只循环一层
 */
function simpleCopy(obj) {
    let newObj = Array.isArray(obj)?[]:{};
    for(let i in obj) {
        newObj[i] = obj[i];
    }
    return newObj;
}
let newObj = simpleCopy(obj);
console.log(newObj);//{ a: 'a', b: { name: 'bbb', age: 12 } }
obj['b']['age'] = 13;//{ a: 'a', b: { name: 'bbb', age: 13 } }
console.log(newObj);
/**
 * 2. Object.assign API
 */
const newObj2 = Object.assign({},obj);

console.log('newObj2: ', newObj2);//{ a: 'a', b: { name: 'bbb', age: 13 } }
newObj2['b']['name']='angwu';
console.log('newObj2: ', newObj2);//{ a: 'a', b: { name: 'angwu', age: 13 } }
console.log('object: ', obj);//{ a: 'a', b: { name: 'angwu', age: 13 } }
/**
 * 3. 直接赋值就是指针指向
 */
let newObj3 = obj;//将newObj3指向Obj指向的地址


