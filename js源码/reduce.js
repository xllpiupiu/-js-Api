/**
 * reduce使用js手动实现
 */
Array.prototype.myReduce = function (callback, initVal) {
    if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
    }
    let res, index = 0;
    if (initVal) {
        res = initVal;
    } else {
        if (this.length === 0) {
            throw new TypeError('myReduce is only work for Array when length of Array is not 0');
        } else {
            res = this[0];
            index = 1;
        }
    }
    for (let i = index; i < this.length; i++) {
        res = callback(res, this[i], i, this);
    }
    return res;
}