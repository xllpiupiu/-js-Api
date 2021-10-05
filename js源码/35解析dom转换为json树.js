/**
 * 1. 给定dom标签
 * let str = '<xml><div><p><a/></p><p></p></div></xml>'
 * 正则规则：https://www.runoob.com/jsref/jsref-obj-regexp.html
 * 正则表达式生成：http://tools.jb51.net/regex/create_reg
 */
let str = '<xml><div><p><a/></p><p></p></div></xml>'


function domParse(str) {

    const startTagReg = /\<(\w+)\>/;//匹配开始标签
    const endTagReg = /\<\/(\w+)\>/;//匹配结束标签
    const closeSelfTagReg = /\<(\w+)\/\>/;//匹配自闭合标签
    const textNodeReg = /\>(.*?)\<\//;//匹配文本内容
    const tagReg = /\<\/?(\w+)\/?\>/g;//全局匹配

    let htmlTree = null;
    let nodeStacks = [];
    let currentNode = null;
    //根据标签创建新的节点
    class CreateNode {
        constructor(tag) {
            const tagName = tag.replace(tagReg, "$1");//去掉<>/
            this.name = tagName
            this.children = null
        }
    }
    //将节点插入到当前操作栈的节点中
    function insertNode(node) {
        if (htmlTree === null) {
            htmlTree = node;
        } else {
            if (currentNode.children === null) {
                currentNode.children = [node];
            } else {
                currentNode.children.push(node);
            }
        }
    }
    const matchedTags = str.match(tagReg);//字符串中匹配到的标签数组
    console.log('matchedTags: ', matchedTags);
    for (let tag of matchedTags) {
        if (startTagReg.test(tag)) {
            //创建新节点
            const node = new CreateNode(tag);
            //向树插入新节点
            insertNode(node);
            //压入栈
            nodeStacks.push(node);
            //更新当前节点
            currentNode = nodeStacks[nodeStacks.length - 1];
        } else if (endTagReg.test(tag)) {
            nodeStacks.pop();
            //更新当前节点
            currentNode = nodeStacks[nodeStacks.length - 1]
        } else if (closeSelfTagReg.test(tag)) {
            const node =new CreateNode(tag)
            insertNode(node);
        }
    }
    return htmlTree;
}
console.log(domParse(str))
/**
 * 总结上面的dom转换为json树步骤
 * 1. 定义好标签开始匹配正则 结束匹配正则 自闭合匹配正则  全局匹配正则
 * 2. 定义创建VNode的类 插入节点的insertNode函数
 * 3. 遍历全局匹配得到的标签数组  然后判断进行对应操作
 */