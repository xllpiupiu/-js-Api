/**
 * 实现axios按顺序请求
 */
function request1(url) {
    return axios.get(url)
}
function request2(url) {
    return axios.get(url)
}
axios.all([request1()]).then(axios.spread(request2()))

/**
 * 2. axios简单封装
 */
//get请求
export function httpGet({
    url,
    params = {}
}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
//post请求
export function httpPost({
    url,
    data = {},
    params = {}
}) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'post',
            transformRequest: [function (data) {
                let ret = []
                for (let item in data) {
                    ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
                }
                return ret
            }],
            data,
            params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
//使用
const getorgList = (params = {}) => httpGet({ url: 'app/api/org/list', params })
getorgList({ id: 200 }).then(res => {
    console.log('res>>>>', res)
})
/**
 * 4. 实现简易版的axios
 */
class Axios {
    constructor() {

    }
    request(config) {
        return new Promise(resolve => {
            const { url = '', method = 'get', data = {} } = config
            //发送ajax请求
            const xhr = new XMLHttpRequest()
            xhr.open(method, url, true)
            xhr.onload = function () {
                console.log(xhr.responseText)
                resolve(xhr.response)
            }
            xhr.send(data)
        })
    }
}
function CreateAxiosFn() {
    let axios = new Axios()
    let req = axios.request.bind(axios)
    return req
}
let axios = CreateAxiosFn()

//使用
axios({})
/**
 * 2. 封装ajax
 */
function ajax(options) {
    const xhr = new XMLHttpRequest()
    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.dataType = options.dataType || 'json'
    const params = options.data || {}
    if (options.type === 'GET') {
        xhr.open('GET', options.url + '?' + params, true)
        xhr.send(null)
    } else if (options.type = 'POST') {
        xhr.open('POST', options.url, true)
        xhr.send(params)
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let status = xhr.status
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
                options.fail && options.fail(status)
            }
        }
    }
}
//ajax发送请求
ajax({
    type: 'post',
    dataType: 'json',
    data: { a: 'hello' },
    url: 'http://llll',
    success: function (text, xml) {
        console.log(text)
    },
    fail: function (status) {
        console.log(status)
        throw new TypeError(`错误${status}`)
    }
})