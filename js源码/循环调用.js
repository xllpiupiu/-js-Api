/**
 * 1. 看的美团优选面经
 */
const log = (callback) => {
    log.count = log.count||0;
    var count = log.count++;
    setTimeout(()=>{
        console.log(count)
        callback()&&callback()
    },Math.random()*1000%10);
}
// const fn = ()=>{
//     if(log.count>5) {
//         return ;
//     }
//     return log(fn)
// }
// fn();
function fn(){}
for(let i = 0;i<3;i++) {
    log(fn);
}