//93 复原IP地址
let str = '123';
// str.slice(0,1);
// console.log('str: ', str.slice(0,1));
str = str.split('');
console.log('str: ', str.slice(0,1));


// str = str.split('');
// str.splice(3,0,'.');
// console.log(str.join(''))
// str.splice(3,1);
// console.log(str.join(''))
/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    s = s.split('');
    const isValid = function(s,start,end) {
        if(start>end) {
            return false;
        }
        if(s[start]==='0'&&start!==end) {
            return false;
        }
        let num = 0;
        for(let i=start;i<=end;i++) {
            if(s[i]>'9'||s[i]<'0') {
                return false;
            }
            num = num*10+(s[i]-'0');
            if(num>255) {
                return false;
            }
        }
        return true;
    }
    const res = [];
    const backTracking = function(startIndex,pointNum) {
        if(pointNum===3) {
            //处理结果
            if(isValid(s,startIndex,s.length-1)) {
                res.push(s.join(''))
            }
            return ;
        }
        for(let i=startIndex;i<s.length;i++) {
            if(isValid(s,startIndex,i)) {
                s.splice(i+1,0,'.');
                backTracking(i+2,pointNum+1)
                s.splice(i+1,'1');
            }
        }
    }
    backTracking(0,0);
    return res;
};