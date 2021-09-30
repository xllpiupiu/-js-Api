//131 分割回文串
/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    const isPlaindRome = function(s,start,end) {
        while(start<end) {
            if(s[start]!==s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    //回溯
    let res = [];
    let path = [];
    const backTracking = function(startIndex) {
        if(startIndex>=s.length) {
            //终止
            res.push([...path]);
            return ;
        }
        for(let i=startIndex;i<s.length;i++) {
            if(isPlaindRome(s,startIndex,i)) {
                let str = s.slice(startIndex,i+1);
                path.push(str);
            } else {
                continue;
            }
            backTracking(i+1);
            path.pop();
        }
    }
    backTracking(0);
    return res;
};