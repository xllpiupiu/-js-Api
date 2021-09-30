//151 翻转字符串里面的单词
//地址： https://leetcode-cn.com/problems/reverse-words-in-a-string/solution/151fan-zhuan-zi-fu-chuan-li-mian-de-dan-y697e/
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function (s) {
    //使用双端队列
    //因为双端队列先入先出
    let left = 0, right = s.length - 1;
    let word = '', queue = [];
    while (s[left] === ' ') left++;
    while (s[right] === ' ') right--;
    while (left <= right) {
        let char = s[left];
        if (char === ' ' && word) {
            queue.unshift(word);
            word = ''
        } else if (char !== ' ') {
            word += char;
        }
        left++;
    }
    queue.unshift(word)
    return queue.join(' ')
};