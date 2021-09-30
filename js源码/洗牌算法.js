/**
 * 实现洗牌算法
 * 就是将原数组随机重新排
 */
let arr = [1, 2, 3, 8, 0];
function shuffle_pick(arr) {
    let res = [];
    for (let i = arr.length; i > 0;) {
        let rand = Math.floor(Math.random() * i);//生成[0,i)随机数
        res.push(arr[rand]);
        // arr.splice(rand,1);
        arr[rand] = arr[--i];
    }
    return res;
}
console.log(shuffle_pick(arr))