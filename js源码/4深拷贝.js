/**
 * 引用类型会有深拷贝的问题
 * 如果是引用类型数据，为了不改动原始数据需要深拷贝原数据
 */
/**
 * 1. 使用工具lodash函数库
 * let newObj = _.cloneDeep(oldObj);
 */
let oldObj = {
    'a':{
        'name':'消防',
        'age':22
    },
    'b':'b',
    'c':{
        'value':'hello',
        'id':23
    },
    'd':[1,2,3],
    'fun':function(){}
}
/**
 * 2. 使用JSON对象
 * 用JSON.stringify将对象转换为JSON字符串然后拷贝
 * 但是JSON.stringify不能转换函数即不能拷贝对象的方法
 */
function deepCopy(oldObj) {
    let newObj = JSON.parse(JSON.stringify(oldObj));
    return newObj;
}
let newObj2 = deepCopy(oldObj);

console.log('newObj2: ', newObj2);//{ a: { name: '消防', age: 22 }, b: 'b', c: { value: 'hello', id: 23 } }
oldObj['c']['id'] = 333;
console.log('newObj2: ', newObj2);//{ a: { name: '消防', age: 22 }, b: 'b', c: { value: 'hello', id: 23 } }
console.log('oldObj:>>>',oldObj)//{ a: { name: '消防', age: 22 }, b: 'b', c: { value: 'hello', id: 333 } }
/**
 * 实现深拷贝需要注意的点：
 */
 const parent1 = {
    a: 1,
    b: 2,
    c: 3
}
const child = {
    d: 4,
    e: 5,
    [Symbol()]: 6
}
child.__proto__ = parent1
Object.defineProperty(child, "d", { enumerable: false })
console.log("Object.keys()>>>>>", Object.keys(child))//Object.keys()>>>>> [ 'e' ]
console.log("Object.getOwnPropertyNames>>>>",Object.getOwnPropertyNames(child))//Object.getOwnPropertyNames>>>> [ 'd', 'e' ]
console.log("Reflect.ownKeys>>>>",Reflect.ownKeys(child))//Reflect.ownKeys>>>> [ 'd', 'e', Symbol() ]

/**
 * 3. 使用递归
 * 获取属性for in  
 * Object.keys(obj)  
 * Object.getOwnPropertyNames(obj)  
 * Reflect.ownKeys 
 * 以上几种方法的区别
 */
function deepClone(oldObj) {
    let newObj = Array.isArray(oldObj)?[]:{};
    for(let key in oldObj) {
        if(oldObj.hasOwnProperty(key)) {
            if(oldObj[key]&&typeof oldObj[key]==='object') {
                console.log('进入深拷贝')
                newObj[key] = deepClone(oldObj[key]);
            } else {
                newObj[key] = oldObj[key];
            }
        }
    }
    return newObj;
}
let newObj3 = deepClone(oldObj);

console.log(newObj3);
oldObj['c']['id'] = 55;
oldObj['d'][0] = 22;
console.log('更改原对象之后newObj',newObj3);
//{
//     a: { name: '消防', age: 22 },
//     b: 'b',
//     c: { value: 'hello', id: 333 },
//     fun: [Function: fun]
//   }
console.log('更改原对象之后oldObj',oldObj)
// {
//     a: { name: '消防', age: 22 },
//     b: 'b',
//     c: { value: 'hello', id: 55 },
//     fun: [Function: fun]
//   }
