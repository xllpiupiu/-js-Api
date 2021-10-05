/**
 * let str = 'abcaakjbb'=>{'a':2,'b':2}
 */
function mostChars(str) {
    if (str === '') return '';
    let stack = [];
    let map = {}
    let last = ''
    str.split('').forEach(item=>{
        if(stack.length) {
            last = stack.pop()
        }
        if(last===item) {
            map[item] = map[item]+1
        } else {
            map[item] = 1
        }
        stack.push(item)
    })
    console.log('map: ', map);
    let max = 0;
    Object.keys(map).forEach(item=>{
        if(map[item]>max){
            max = map[item]
        }
    })
    Object.keys(map).forEach(item=>{
        if(map[item]<max) {
            delete map[item]
        }
    })
    console.log('max>>>',max)
    return map
}
let str = 'abcaakjbbb'
console.log(mostChars(str))
/**
 * 2. 第二种方法
 */
const maxRepeatLetter = function(str) {
    const arr = str.match(/(\w)\1*/g)//按连续分组
    console.log('arr: ', arr);
    let maxLen = 0
    arr.forEach(item=>{
        if(item.length>maxLen) {
            maxLen = item.length
        }
    })
    console.log('maxLen: ', maxLen);
    const res = arr.reduce((pre,cur)=>{
        if(cur.length===maxLen) {
            pre[cur[0]] = cur.length
        }
        return pre
    },{});
    return res;
}
console.log(maxRepeatLetter(str))