let list = [1, 2, 3, 4, 5]
const incrementNumbers = function (list) {
    return list.map(item => item * item)
}
console.log(incrementNumbers(list))
console.log('list: ', list);