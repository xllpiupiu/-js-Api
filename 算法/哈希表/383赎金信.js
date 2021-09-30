/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function (ransomNote, magazine) {
    //1. 用数组hash记录magazine字符串中字符出现次数
    let hash = new Array(26).fill(0);
    //2. 记录magazine字符串中字符出现的次数
    let base = "a".charCodeAt();
    for (let item of magazine) {
        hash[item.charCodeAt() - base]++;
    }
    for(let item of ransomNote) {
        hash[item.charCodeAt()-base]--;
        if(hash[item.charCodeAt()-base]<0) {
            return false;
        }
    }
    return true;
};

// 作者：avvesome-satoshinwt
// 链接：https://leetcode-cn.com/problems/ransom-note/solution/383-shu-jin-xin-by-avvesome-satoshinwt-yujh/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。