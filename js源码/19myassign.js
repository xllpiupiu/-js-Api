/**
 * 实现assgin功能
 */
Object.myassign = function (target, ...src) {
    let length = src.length;
    for (let i = 0; i < length; i++) {
        if (src[i]) {
            for (let key of Object.keys(src[i])) {
                target[key] = src[i][key];
            }
        }
    }
    return target;
}
let obj = {
    'a': 'a',
    'b': function () { }
}
let newObj = Object.myassign(obj,{'c':'c'})

console.log('newObj: ', newObj);