/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    const isAnagram = function(s1,s2) {
        let hash = new Array(26).fill(0);
        let base = "a".charCodeAt();
        for(let item of s1) {
            hash[item.charCodeAt()-base]++;
        }
        for(let item of s2) {
            hash[item.charCodeAt()-base]--;
            if(hash[item.charCodeAt()-base]<0) {
                return false;
            }
        }
        return true;
    }
    let res = [];
    for(let i =0;i<s.length-p.length+1;i++){
        if(isAnagram(s.slice(i,i+p.length),p)) {
            res.push(i);
        }
    }
    return res;
};

/**
 * 2 . 时间复杂度为O(n)
 * 空间复杂度也是常熟O(1) 
 */
 https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/solution/438zhao-dao-zi-fu-chuan-zhong-suo-you-zi-o84t/
 /**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let sHash = new Array(26).fill(0);
    let pHash = new Array(26).fill(0);
    let base = "a".charCodeAt();
    for (let item of p) {
        pHash[item.charCodeAt() - base]++;
    }
    let slow = 0;
    let res = [];
    for (let fast = 0; fast < s.length; fast++) {
        sHash[s[fast].charCodeAt() - base]++;
        if (fast >= p.length) {
            sHash[s[slow].charCodeAt()-base]--;
            slow++;
        }
        let flag = false;
        for(let i = 0;i<26;i++){
            if(sHash[i]!==pHash[i]){
                flag = false;
                break;
            }
            flag = true;
        }
        if(flag) {
            res.push(slow);
        }

    }
    return res;
};