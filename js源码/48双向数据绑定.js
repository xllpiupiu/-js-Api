/**
 * 1.https://vue3js.cn/interview/vue/bind.html#%E4%BA%8C%E3%80%81%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88
 * 双向数据绑定：数据更新视图  视图更新数据
 */
//1. 构造函数 
class Vue {
    constructor(options) {
        this.$options = options
        this.$data = options.data
        //使得data响应式
        observe(this.$data)
        proxy(this)
        //编译
        new Compile(options.el, this)
    }
}
//2. observe使得数据变成响应式
function observe(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return
    }
    new Observer(obj)
}
class Observer {
    constructor(value) {
        this.value = value
        this.walk(value)
    }
    walk(obj) {
        Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
    }
}
class Compile {
    constructor(el, vm) {
        this.$vm = vm
        this.$el = document.querySelector(el)
        if (this.$el) {
            this.compile(this.$el)
        }
    }
    compile(el) {
        const childNodes = el.childNodes
        Array.from(childNodes).forEach(node => {
            if (this.isElement(node)) {
                console.log('编译元素', node.nodeName)
            } else if (this.isInterpolation(node)) {
                console.log('编译插值文本', node.textContent)
            }
            if (node.childNodes && node.childNodes.length > 0) {
                this.compile(node)
            }
        })
    }
    isElement(node) {
        return node.nodeType === 1
    }
    isInterpolation(node) {
        return node.nodeType === 3 && /\{\{(.*?)\}\}/.test(node.textContent)
    }
}
class Watcher {
    constructor(vm, key, updater) {
        this.vm = vm
        this.key = key
        this.updaterFn = updater
        Dep.target = this
        this.vm[this.key]
        Dep.target = null
    }
    update() {
        this.updaterFn.call(this.vm, this.vm[this.key])
    }
}

class Dep {
    constructor() {
        this.deps = []//依赖管理
    }
    addDep(dep) {
        this.deps.push(dep)
    }
    notify() {
        this.deps.forEach((watcher) => watcher.update)
    }
}

function defineReactive(obj,key,val) {
    this.observe(val)
    const dep = new Dep()
    Object.defineProperty(obj,key,{
        get() {
            Dep.target&&dep.addDep(Dep.target)//watche实例
            return val
        },
        set(newVal) {
            if(newVal===val) return 
            dep.notify()
        }
    })
}