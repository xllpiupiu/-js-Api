const backTracking=function(参数) {
    if(终止条件) {
        处理结果
        return ;
    }
    //单层处理
    for(选择:本层集合中元素(树中节点孩子的数量就是本层集合的大小)) {
        处理节点;
        backTracking(路径,选择列表);//递归
        回溯,撤销处理结果;
    }
}