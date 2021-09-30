/**
 * https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/solution/452yong-zui-shao-shu-liang-de-jian-yin-b-qq7g/
 */
 var findMinArrowShots = function (points) {
    //1. 首先按照起始坐标对points排序(升序) 
    points.sort((a, b) => a[0] - b[0]);
    let res = 1;
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > points[i - 1][1]) {
            res++;
        } else {
            //更新下最右边坐标
            points[i][1] = Math.min(points[i][1], points[i - 1][1])
        }
    }
    return res;
};