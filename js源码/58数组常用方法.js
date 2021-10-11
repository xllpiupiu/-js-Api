/**
 * 1. 增删改查
 */
const people = [
    {
        name:'namel',
        age:'12'
    },
    {
        name:'heoo',
        age:'23'
    }
]
console.log(people.find((item,index,arr)=>item.age<'13'))