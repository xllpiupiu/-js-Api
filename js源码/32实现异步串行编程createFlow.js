/**
 * 1. 实现打印结果
 * a,b
 * 1s后
 * c
 * 1s后
 * d
 * e
 * done
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const subFlow = createFlow([() => delay(1000).then(() => console.log('c'))]);
createFlow([
    () => console.log('a'),
    () => console.log('b'),
    subFlow,
    [() => delay(1000).then(() => console.log('d')), () => console.log('e')],
]).run(() => {
    console.log('done')
});
/**
 * 解法一：确定createFlow 的入参处理以及返回值
 * 这里需要对入参做扁平化处理
 * 返回的是一个对象对象里面有run 方法
 * @param {*} effects 
 * @returns 
 */
function createFlow(effects = []) {
    const queue = [...effects.flat()];
    const run = async function (cb) {
        for (let task of queue) {
            if(task.isFlow) {
                await task.run()
            } else {
                await task()
            }
        }
        cb && cb();
    }
    return {
        run,
        isFlow:true
    }
}
/**
 * 解法二：使用class
 */
//  class Flow {
//     constructor(effects) {
//         this.queue = [...effects.flat()]
//     }
//     async run(cb) {
//         for (let task of this.queue) {
//             if (task instanceof Flow) {
//                 await task.run()
//             } else {
//                 await task()
//             }
//         }
//         cb && cb()
//     }
// }
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const subFlow = createFlow([() => delay(1000).then(() => console.log('c'))]);
// createFlow([
//     () => console.log('a'),
//     () => console.log('b'),
//     subFlow,
//     [() => delay(1000).then(() => console.log('d')), () => console.log('e')],
// ]).run(() => {
//     console.log('done')
// });
// function createFlow(effects = []) {
//     return new Flow(effects)
// }
