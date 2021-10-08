/**
 * https://blog.csdn.net/weixin_43792004/article/details/113442506
 */
//中间人 主题
class Dep {
    constructor(callback) {
        this.subs = []
        this.callback = callback
    }
    addSub(sub) {
        this.subs.push(sub)
        return this
    }
    notify() {
        this.subs.forEach(item=>item.update(this.callback))
    }
}
//订阅者
class Sub {
    constructor(val) {
        this.val = val
    }
    update(callback) {
        this.val = callback(this.val);
        console.log('this.val: ', this.val);
    }
}
//发布者
class Pub {
    constructor() {
        this.deps = []
    }
    addDep(dep) {
        this.deps.push(dep)
    }
    removeDep(dep) {
        let index = this.deps.indexOf(dep)
        if(index!==-1) {
            this.deps.splice(index,1)
            return true
        }
        return false
    }
    publish(dep) {
        this.deps.forEach(item=>item===dep&&item.notify())
    }
}
let dep1 = new Dep(item=>item*item)
let sub1 = new Sub(3)
dep1.addSub(sub1)
let pub1 = new Pub()
pub1.addDep(dep1)
pub1.publish(dep1)