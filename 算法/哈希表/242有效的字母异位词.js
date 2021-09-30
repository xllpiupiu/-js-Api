/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    //1. 用数组hash表 因为字母总共就26个
    let hash = new Array(26).fill(0);
    //2. 记录字符串s中字母出现的次数
    const base = "a".charCodeAt();
    for(let i of s) {
        hash[i.charCodeAt()-base]++;
    }
    //3. 记录根据t字符串中字符出现的次数更改hash
    for(let i of t) {
        hash[i.charCodeAt()-base]--;
    }
    //4. 循环遍历hash看是否有不是0的项如果有则返回false
    for(let item of hash) {
        if(item!==0) {
            return false;
        }
    }
    return true;
};

// 作者：avvesome-satoshinwt
// 链接：https://leetcode-cn.com/problems/valid-anagram/solution/242you-xiao-de-zi-mu-yi-wei-ci-by-avveso-jmik/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。