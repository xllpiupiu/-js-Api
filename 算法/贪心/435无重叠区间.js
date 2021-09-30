/**
 * 435 和最少数量箭射气球类似
 */
 var eraseOverlapIntervals = function (intervals) {
    //这次按照结束位置排序 从左-》右遍历
    //找到非交叉区间，然后用总区间数减去非交叉区间
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let end = intervals[0][1];
    for(let i=1;i<intervals.length;i++) {
        if(end<=intervals[i][0]) {
            count++;
            end = intervals[i][1];
        }
    }
    return intervals.length - count;
};