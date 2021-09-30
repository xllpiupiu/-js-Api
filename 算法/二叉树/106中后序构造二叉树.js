//106 地址https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solution/106-cong-zhong-xu-yu-hou-xu-bian-li-gou-ly8hy/

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 function TreeNode(val,left,right) {
    this.val =(val===undefined?0:val);
    this.left = (left===undefined?null:left);
    this.right = (right===undefined?null:right);
}
var buildTree = function (inorder, postorder) {
   const traversal = function (inorder, inorderBegin, inorderEnd, postorder, postorderBegin, postorderEnd) {
       //1. 中序的长度为1则没有左子树
       if (inorderBegin > inorderEnd) {
           return null;
       }
       const nodeVal = postorder[postorderEnd];
       const curNode = new TreeNode(nodeVal);
       if(inorderEnd-inorderBegin===0) {
           return curNode;
       }
       let delimiterIndex=inorder.indexOf(nodeVal)
       let leftInorderBegin = inorderBegin;
       let leftInorderEnd = delimiterIndex-1;
       let rightInorderBegin = delimiterIndex+1;
       let rightInorderEnd = inorderEnd;
       let leftPostorderBegin = postorderBegin;
       let leftPostorderEnd = postorderBegin+(leftInorderEnd-leftInorderBegin);
       let rightPostorderBegin = leftPostorderEnd+1;
       let rightPostorderEnd = postorderEnd - 1;
       curNode.left = traversal(inorder,leftInorderBegin,leftInorderEnd,postorder,leftPostorderBegin,leftPostorderEnd);
       curNode.right = traversal(inorder,rightInorderBegin,rightInorderEnd,postorder,rightPostorderBegin,rightPostorderEnd);
       return curNode;
   }
   if(inorder.length===0||postorder.length===0) {
       return null;
   }
   return traversal(inorder,0,inorder.length-1,postorder,0,postorder.length-1);
};

/**
 * 2. 使用第二种方法
 */
 var buildTree = function (inorder, postorder) {
    const inorderObject = {};
    for(let i = 0;i<inorder.length;i++) {
        inorderObject[inorder[i]] = i;
    }
    const travelTree = function(start,end) {
        if(start>end) {
            return null;
        }
        let nodeValue = postorder.pop();
        let root = new TreeNode(nodeValue);
        if(start===end) {
            return root;
        }
        root.right = travelTree(inorderObject[nodeValue]+1,end);//这里的root.right必须在root.left前面因为使用了postorder.pop()
        root.left = travelTree(start,inorderObject[nodeValue]-1);
        return root;
    }
    return travelTree(0,inorder.length-1);
};