/**
 * 每隔1s发起一次axios请求
 */
function req(url,params) {
    let num = 0
    function _req(params) {
        //将这里的Promise.resolve替换为fetch axios params替换为url params即可
        Promise.resolve(params).then(res=>{
            if(num++>3 || res.name === 'hello') {
                return ;
            }
            console.log(res)
            const timer = setTimeout(()=>{
                clearTimeout(timer)
                _req(params)
            },1000)
        })
    }
    return _req(params)
}
// req('http://www.baidu.com',{})
req('http://www.guge.com',{name:'hello',age:23})