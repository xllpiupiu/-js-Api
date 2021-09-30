
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function (nums, k) {
//     let map = new Map(),
//         heap = [,];
//     //map计算数组中每个元素出现次数
//     for (let item of nums) {
//         map.set(item, map.has(item) ? map.get(item) + 1 : 1);
//     }
//     // 如果map大小小于=k 直接返回map的键
//     if (map.size <= k) {
//         return [...map.keys()]
//     }
//     let i = 0;
//     //循坏map i计数
//     
//     map.forEach((value, key) => {
//         if (i < k) {
//             // 先将k个键放到heap堆中
//             heap.push(key);
//             //当heap长度达到k时，开始堆化 最顶端为最小
//             if (i === k - 1) {
//                 buildHeap(heap, map, k);
//             }
//         } else if (map.get(heap[1]) < value) {
//             // 开始堆化剩下的元素
//             heap[1] = key;
//             heapify(heap, map, k, 1);
//         }
//         i++;
//     })
//     heap.shift();
//     return heap;
// };
// //建立堆
// function buildHeap(heap, map, heapSize) {
//     if (heapSize === 1) return;
//     for (let i = Math.floor(heapSize / 2); i >= 1; i--) {
//         //堆化
//         heapify(heap, map, heapSize, i);
//     }
// }
// //堆化
// function heapify(heap, map, heapSize, i) {
//     while (true) {
//         let minIndex = i;
//         if (2 * i <= heapSize && map.get(heap[2 * i]) < map.get(heap[i])) {
//             minIndex = 2 * i;
//         }
//         if (2 * i + 1 <= heapSize && map.get(heap[2 * i + 1]) < map.get(heap[minIndex])) {
//             minIndex = 2 * i + 1;
//         }
//         if (minIndex !== i) {
//             let temp = heap[i];
//             heap[i] = heap[minIndex];
//             heap[minIndex] = temp;
//             i = minIndex;
//         } else {
//             break;
//         }
//     }
// }
// topKFrequent([1, 1, 1, 1, 2, 2, 3, 4], 2)

// let map = new Map([
//     [1, 4],
//     [2, 3],
//     [3, 8]
// ])
// for(let [key,value] of map.entries()){
//     
// }
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function (nums, k) {
    const swap = function (arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    const heapify = function (heap, i, map) {
        while (Math.floor(i / 2) > 0 && map.get(heap[i]) < map.get(heap[Math.floor(i / 2)])) {
            swap(heap, i, Math.floor(i / 2));
            i = Math.floor(i / 2);
        }
    }
    const buildHeap = function (heap, heapSize, map) {
        while (heapSize < heap.length - 1) {
            heapSize++;
            heapify(heap, heapSize, map);
        }
    }
    //1. 先用map记录元素出现次数
    let map = new Map();
    for (let num of nums) {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    }
    
    //2. 建立堆，然后对map元素进行堆化
    let heap = [,];
    if (map.size <= k) {
        return [...map.keys()];
    }
    let i = 0;
    for (let [key, value] of map.entries()) {
        if (i < k) {
            heap.push(key);
            //取前K个数建立小顶堆 
            if (i === k - 1) {
                buildHeap(heap, 1, map);//使用自下而上的方式  
            }
        } else {
            if (value > map.get(heap[1])) {
                heap[1] = key;
                buildHeap(heap, 1, map);//使用自下而上的方式 
                //这不使用heapify，因为这里的i不好确定，有两个值
            }
        }
        i++;
    }
    let res = heap.slice(1);
    return res;
};
topKFrequent([5,-3,9,1,7,7,9,10,2,2,10,10,3,-1,3,7,-9,-1,3,3],3);