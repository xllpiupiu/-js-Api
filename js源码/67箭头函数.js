/**
 * 1. 箭头函数
 */
const person = {
    name: 'lisa',
    getThis() {
        console.log(this)
    },
    getName: () => {
        console.log('this.name>>',this.name)
    }
}
person.getName()
person.getThis()