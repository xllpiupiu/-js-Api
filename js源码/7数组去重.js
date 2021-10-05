/**
 * 数组去重
 * 方法比较多 
 * ES6的Set、Map、双指针、数组indexOf、includes、filter、API(reduce)
 */
/**
 * 1. ES6的set
 */
let arr = [1,1,2,2,3,3,3,3,5,8,0];
function unique(arr) {
   let res= new Set(arr);
    return [...res];
}
console.log(unique(arr));
/**
 * 2. 使用map
 */
function unique2(arr) {
    let map = new Map();
    let res = [];
    for(let item of arr) {
        if(!map.has(item)) {
            map.set(item,1);
            res.push(item);
        }
    }
    return res;
}
console.log(unique2(arr));
/**
 * 3.使用API indexOf sort排序之后使用双指针
 */
function unique3(arr) {
    if(!Array.isArray(arr)) {
        throw new TypeError('this is not Array');
    }
    let res = [];
    for(let item of arr) {
        if(res.indexOf(item)===-1) {
            res.push(item);
        }
    }
    return res;
}
console.log(unique3(arr));
/**
 * 3. filter去重
 */
function unique4(arr) {
    return arr.filter((item,index,arr)=>{
        return arr.indexOf(item,0) === index;
    })
}
console.log(unique4(arr));
/**
 * 4. reduce去重
 */
function unique5(arr) {
   return arr.reduce((pre,cur,index,arr)=>{
        if(pre.indexOf(cur)===-1) {
            pre.push(cur);
        }
        return pre;
    },[]);
}
console.log(unique5(arr));