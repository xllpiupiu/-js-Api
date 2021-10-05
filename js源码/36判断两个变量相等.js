/**
 * https://www.cnblogs.com/lindasu/p/7471519.html
 * === Object.is
 * https://github.com/sisterAn/JavaScript-Algorithms/issues/116
 */
Object._is = function(x,y) {
    if(x===y) {
        return x!==0||1/x===1/y
    } else {
        return x!==x&&y!==y
    }
}
console.log(Object._is(NaN,NaN))