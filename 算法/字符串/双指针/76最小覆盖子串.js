//76 地址：https://leetcode-cn.com/problems/minimum-window-substring/solution/76zui-xiao-fu-gai-zi-chuan-by-avvesome-s-g7j7/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    //定义检查map的函数
    const check = function (map) {
        for (let val of map.values()) {
            if (val > 0) {
                return false;
            }
        }
        return true;
    }
    //双指针+map
    //1.用map记录t中字符出现次数
    let map = new Map();
    for (let item of t) {
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    }
    let start = 0;
    let strStart = 0;
    let windowLength = s.length + 1;
    //2.循环遍历s
    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            map.set(s[end], map.get(s[end]) - 1);
        }
        //3.检查map
        while (check(map)) {
            //4. 比较记录窗口大小，并记录起始位置
            if (end - start + 1 < windowLength) {
                windowLength = end - start + 1;
                strStart = start;
            }
            //5. 判断start指向s中的字符在map中是否存在
            if (map.has(s[start])) {
                map.set(s[start], map.get(s[start]) + 1);
            }
            start++;
        }
    }
    if (windowLength !== s.length + 1) {
        return s.substring(strStart, strStart + windowLength);
    }
    return "";
};