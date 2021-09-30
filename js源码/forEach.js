/**
 * 1. 实现forEach
 */
Array.prototype.myForEach = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function')
    }
    let _this;
    if (arguments.length > 1) {
        _this = thisArg;
    }
    for (let i = 0; i < this.length; i++) {
        callback.call(_this, this[i], i, this);
    }
}
let array = [1, 2, 3, 4];
let obj = {
    'a': 'a',
    'b': 'b'
}
array.myForEach(function (val, index) {
    console.log(index, '-->', val, '--->', this['a'])
}, obj)
obj.myForEach((val, index) => {
    console.log(index, '-->>', val, '-->>', this['b'])
}, obj)
array.forEach(function (index, val) {
    console.log(index, '-->>', val, '-->>', this['b'])
}, obj)