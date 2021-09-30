let obj = {
    name:'要变瘦的小猪猪',
    age:'23'
}
/**
 * 1. apply实现
 * @param {*} obj 
 * @param {*} arr 
 * @returns 
 */
/**
 * 步骤：1. 判断第二个参数是否为数组  2. 判断第一个参数是否指定，没有指定obj=window  
 */
Function.prototype.myApply = function(obj,arr) {
    if(!Array.isArray(arr)) {
        throw new TypeError('the second parameter is not an Array');
    }
    if(!obj) {
        obj = window;
    } 
    obj.func = this;
    let res ;
    if(!arr) {
       res =obj.func()
    } else {
        let args = [];
        for(let i=0;i<arr.length;i++) {
            args.push("arr["+i+"]");
        }
        res =eval("obj.func("+args+")");
        //res = obj.func(...arr) arg数组不需要
    }
    delete obj.func;
    return res;
}
function testMyApply(a,b,c) {
    console.log(a+b+c+`${this.name}`);
}
testMyApply.myApply(obj,[1,20,1]);