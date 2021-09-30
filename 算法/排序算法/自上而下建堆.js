function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const buildHeap = function (heap, heapSize) {
    for (let i = Math.floor(heapSize / 2); i >=1; --i) {
        heapify(heap, heapSize, i);
    }
}
const heapify = function (heap, heapSize, i) {
    while (true) {
        let maxIndex = i;
        if (2 * i <= heapSize && heap[i] < heap[2 * i]) {
            maxIndex = 2 * i;
        }
        if (2 * i + 1 <= heapSize && heap[maxIndex] < heap[2 * i + 1]) {
            maxIndex = 2 * i + 1;
        }
        if (maxIndex === i) {
            //没有交换直接break
            break;
        }
        swap(heap, i, maxIndex);
        i = maxIndex;
    }
}
let arr = [5,2,3,4,1];
buildHeap(arr, arr.length-1);
console.log(arr);