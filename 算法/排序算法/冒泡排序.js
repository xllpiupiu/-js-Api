/**
 * 冒泡排序
 * 平均时间复杂度 O(n^2) 
 * 空间复杂度 O(1)
 * 稳定
 * 这以升序排序为例实现冒泡排序
 */
function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
const arr = [1, 3, 4, 80, 2, 3,0,-1];
function bubbleSort(arr) {
    do {
        var flag = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                swap(arr,i,i-1);
                flag = true;
            }
        }
    }while(flag);
    return arr;
}
console.log(bubbleSort(arr));