/**
 * 再vue的源码src/compiler/parser/text-parser.js中就是文本解析器
 * https://vue-js.com/learn-vue/complie/textParse.html#_1-%E5%89%8D%E8%A8%80
 * text = "我叫{{name}},我今年{{age}}岁了"
 * 参考
 * https://mp.weixin.qq.com/s/yjGatP7NSnZRAB3v5FslmQ
 */
/**
 * 正则参考：https://www.cnblogs.com/xiaonian8/p/14017545.html
 * 1. 先了解下正则相关知识
 * 正则的 test exec方法返回值
 * .: 匹配换行符之外任意的单词
 */
let regex = /hello/
let str = 'hello world!'
let result = regex.test(str)
console.log('result: ', result)//result:  true
let result2 = regex.exec(str)
console.log('result2: ', result2)//result2:  [ 'hello', index: 0, input: 'hello world!', groups: undefined ]
const parent = {
    a: 1,
    b: 2,
    c: 3
}
const child = {
    d: 4,
    e: 5,
    [Symbol()]: 6
}
child.__proto__ = parent
Object.defineProperty(child, "d", { enumerable: false })
console.log("Object.keys()>>>>>", Object.keys(child))//Object.keys()>>>>> [ 'e' ]
console.log("Object.getOwnPropertyNames>>>>",Object.getOwnPropertyNames(child))//Object.getOwnPropertyNames>>>> [ 'd', 'e' ]
console.log("Reflect.ownKeys>>>>",Reflect.ownKeys(child))//Reflect.ownKeys>>>> [ 'd', 'e', Symbol() ]

let testRender = (template,context) => {
    let reg = /\{\{(.*?)\}\}/g
    return template.replace(reg,(match,key,index,str)=>{
        console.log('match: ', match);
        console.log('key: ', key);
        console.log('index: ', index);
        console.log('str: ', str);
        return context[key.trim()]
    })
}
let template = '{{name}}{{name}}很年轻,好了{{money}}';
let context = {
    name: 'xl',
    money:'800'
}
console.log(testRender(template,context))
const render = (template,context) => {
    let defaultTagRe = /\{\{((?:.|\r?\n)+?)\}\}/g
    return template.replace(defaultTagRe,(match,key,index,str)=>{
        return context[key.trim()]
    })
}
console.log(render(template,context))
