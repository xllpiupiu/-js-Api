//77 组合
var combine = function(n, k) {
    //使用回溯
    let res = [];
    let path = [];
    const backTracking = function(n,k,startIndex) {
        if(path.length===k) {
            res.push([...path]);
            return ;
        }
        for(let i=startIndex;i<=n-(k-path.length)+1;i++){
            path.push(i);
            backTracking(n,k,i+1);
            path.pop();
        }
    }
    backTracking(n,k,1);
    return res;
};