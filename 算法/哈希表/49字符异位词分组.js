/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    //1. 遍历strs以排完序的字符串作为键值
    let list = [];
    let map = new Map()
    for(let str of strs) {
        let strArr = str.split('');
        strArr.sort();
        let key = strArr.join('');
        if(map.has(key)) {
           list = map.get(key);
        } else {
            list = [];
        }
        list.push(str);
        map.set(key,list);
    }
    return [...map.values()]
};

// 作者：avvesome-satoshinwt
// 链接：https://leetcode-cn.com/problems/group-anagrams/solution/49zi-fu-yi-wei-ci-fen-zu-by-avvesome-sat-5z36/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。