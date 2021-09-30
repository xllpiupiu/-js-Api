function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const buildHeap = function (heap, heapSize) {
    while (heapSize < heap.length-1) {
        heapSize++;
        heapify(heap, heapSize);
    }
}
const heapify = function (heap, i) {
    while (Math.floor(i / 2) > 0 && heap[i] > heap[Math.floor(i / 2)]) {
        swap(heap, i, Math.floor(i / 2));
        i = Math.floor(i/2);
    }
}
let arr = [5,2,3,4,1];
buildHeap(arr, 1);
console.log(arr);