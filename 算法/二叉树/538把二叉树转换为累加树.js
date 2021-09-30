//538 把二叉树转换为累加树
var convertBST = function(root) {
    //从题目意思可以使用右中左遍历方式 
    //这里使用一个pre指针记录前面的node.val
    //入栈顺序 左 中 右
    if(root===null) return root;
    let stack = [];
    stack.push(root);
    let pre = 0;
    while(stack.length) {
        let node = stack.pop();
        if(node!==null) {
            node.left&&stack.push(node.left);
            stack.push(node);
            stack.push(null);
           node.right&& stack.push(node.right);
        }else {
            node = stack.pop();
            node.val+=pre;
            pre = node.val;
        }
    }
    return root;
};
var convertBST = function(root) {
    //递归实现右中左
    let pre = 0;
    const dfs = function(root) {
        if(root===null)return root;
        root.right&&dfs(root.right);
        root.val+=pre;
        pre = root.val;
        root.left&&dfs(root.left);
    }
    dfs(root);
    return root;
};