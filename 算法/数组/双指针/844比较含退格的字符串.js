//844 比较含退格的字符串
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function (s, t) {
    //使用双指针
    //从后往前遍历
    let sIndex = s.length - 1;
    let tIndex = t.length - 1;
    let skipS = 0;
    let skipT = 0;
    while (sIndex >= 0 || tIndex >= 0) {
        //S字符串遍历

        while (sIndex >= 0) {
            if (s[sIndex] === '#') {
                skipS++;
                sIndex--;
            } else if (skipS > 0) {
                skipS--;
                sIndex--;
            } else {
                break;
            }
        }
        while (tIndex >= 0) {
            if (t[tIndex] === '#') {
                skipT++;
                tIndex--;
            } else if (skipT > 0) {
                skipT--;
                tIndex--;
            } else {
                break;
            }
        }
        console.log('sIndex:',s[sIndex]);
        console.log('tIndex:',t[tIndex]);
        console.log(s[sIndex]===t[tIndex])
        if (s[sIndex] !== t[tIndex]) {
            return false;
        }
        sIndex--;
        tIndex--;
    }
    return true;
};
backspaceCompare('ab##','a#b#');