/**
 * 56. 合并区间 还是先对数组按照项的第一项排序
 */
 var merge = function (intervals) {
    //1. 先对intervals排序
    intervals.sort((a, b) => a[0] - b[0])
    let res = [];
    res.push(intervals[0]);
    for (let item of intervals) {
        let resLast = res[res.length - 1];
        if (resLast[1] >= item[0]) {
            //有重叠区间
            resLast[1] = Math.max(item[1], resLast[1]);
        } else {
            res.push(item);
        }
    }
    return res;
};