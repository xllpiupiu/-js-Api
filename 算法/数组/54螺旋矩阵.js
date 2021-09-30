// 54
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function (matrix) {
    const res = [];
    //1. 定义左边界 右边界 上边界 下边界
    let m = matrix.length;
    let n = matrix[0].length;
    let l = 0, r = n - 1, t = 0, b = m - 1;
    let matrixSize = m * n;
    while (res.length < matrixSize) {
        for (let i = l; i <= r; i++) {
            res.push(matrix[t][i]);
        }
        t++;
        for (let i = t; i <= b; i++) {
            res.push(matrix[i][r]);
        }
        r--;
        if(res.length === matrixSize) {
            break;
        }
        for (let i = r; i >= l; i--) {
            res.push(matrix[b][i]);
        }
        b--;
        for (let i = b; i >= t; i--) {
            res.push(matrix[i][l]);
        }
        l++;
    }
    return res;
};

// 作者：avvesome-satoshinwt
// 链接：https://leetcode-cn.com/problems/spiral-matrix/solution/54luo-xuan-ju-zhen-by-avvesome-satoshinw-fhj2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。