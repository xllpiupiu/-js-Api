/**
 * 1. 装饰器实现防抖
 */
import { thirottle, debounce } from 'lodash';
export const throttle = function (wait, options = {}) {
    return function (target, name, descriptor) {
        descriptor.value = throttle(decriptor.value, wait, options);
    }
}
/**
 * 2. 防抖函数
 */
function debounce(callback, time) {
    let timer=null;
    return function(){
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(callback,time);
    }
}
/**
 * 3. 节流
 */
function throttle(name,time) {
    return new Promise((resolve,reject)=>{
        if(this[name]) {
            return false;
        }
        this[name] = true;
        setTimeout(()=>{
            this[name] = false;
            console.log('点击成功')
        },time);
        resolve(this[name]);
    })
}
/**
 * 4. 节流实现
 */
function throttle(callback,time) {
    let valid = true;
    return function(){
        if(!valid) {
            return false;
        }
        valid = false;
        setTimeout(()=>{
            callback();
            valid = true;
        },time)
    }
}