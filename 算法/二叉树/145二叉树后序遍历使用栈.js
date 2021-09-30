var postorderTraversal = function(root) {
    //后序遍历 左右中 中右左
    let res = [];
    let stack = [];
    if(root===null) {
        return res;
    }
    stack.push(root);
    while(stack.length) {
        let node = stack.pop();
        if(node!==null) {
            stack.push(node);
            stack.push(null);
            node.right&&stack.push(node.right);
            node.left&&stack.push(node.left);
        } else {
            let node = stack.pop();
            res.push(node.val);
        }
    }
    return res;
};