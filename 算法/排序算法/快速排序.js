/**
 * 快速排序 适合n非常大的时候  但是如果待排序序列本身就有序时间复杂度是O(n^2);
 * 平均时间复杂度O(nlogn)
 * 空间复杂度 O(logn)
 * 不稳定
 * 实现升序排列
 */
 function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
const arr = [1, 3, 4, 80, 2, 3,0,-1];
function quickSort(arr,left,right) {
    if(left<right) {
        let i = left,j=right;
        let temp = arr[left];
        while(i<j) {

        }
    }
}