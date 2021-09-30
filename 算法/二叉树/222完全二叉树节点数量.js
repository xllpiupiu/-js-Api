//222 完全二叉树
/**
 * 使用完全二叉树特性,一直往下找
 * @param {*} root 
 * @returns 
 */
var countNodes = function(root) {
    //利用完全二叉树的特点
    if(root===null){
        return 0;
    }
    let left=root.left;
    let right=root.right;
    let leftHeight=0,rightHeight=0;
    while(left){
        left=left.left;
        leftHeight++;
    }
    while(right){
        right=right.right;
        rightHeight++;
    }
    if(leftHeight==rightHeight){
        return Math.pow(2,leftHeight+1)-1;
    }
    return countNodes(root.left)+countNodes(root.right)+1;
};
/**
 * 使用后序遍历找到左右子节点数量
 */
 var countNodes = function(root) {
    //使用后序遍历
    const getNodesNum = function(root) {
        if(root===null) return 0;
        let leftNum = getNodesNum(root.left);
        let rightNum = getNodesNum(root.right);
        return leftNum + rightNum +1;
    }
    return getNodesNum(root);
};