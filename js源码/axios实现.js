/**
 * 1. 实现ajax的get请求
 */
const Ajax = {
    get: function(url,fn) {
        // 1.创建xhr对象
        const xhr = new XMLHttpRequest();
        //2.设置请求方式和请求地址 true表示异步
        xhr.open('GET',url,true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status === 200) {
                fn.call(this,xhr.responseText);
            }
        };
        xhr.send();
    }
}
/**
 * 2. 封装实现axios回调
 */
const ajax = {
    get: function(url) {
        return new Promise((resolve,reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET',url,true);
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                }
            }
            xhr.send();
        });
    }
}