// function format(date, fmt) {
//     /* Write Code Here */
//     let reg = (/(\w)\1*/ig)
//     const year = date.getFullYear()
//     const month = date.getMonth() + 1;
//     const day = date.getDate()
//     const res = fmt.replace(reg, (match, key, index, str) => {
//         let length = match.length;
//         if (key === 'y') {
//             return year;
//         } else if (key === 'M') {
//             if (length === 2 && month < 10) {
//                 return `0${month}`
//             }
//             return month;
//         } else if (key === 'd') {
//             if (length === 2 && day < 10) {
//                 return `0${day}`
//             }
//             return day
//         }
//     })
//     return res
// }
// console.log(dateFormat(new Date('2021/09/08'), 'MM/dd/yyyy'))
/**
 * 2. 格式化token
 */
 let data = {
    localDate: "2020-09-01",
    ip: "128.0.0.9",
    method: "POST",
    qunarglobal: "asdu2333wuroo",
    "nginx-ip": "100.90.98.109"
};
const _token = ':ip - - [:localDate] ":method ":qunarglobal" [:nginx-ip] ":qunarglobal"'
function format(token, data) {
    console.log('token: ', token);
    const reg = /:ip|:localDate|:method|:qunarglobal|(:nginx-ip)|:qunarglobal/ig
    const res = token.replace(reg,(match)=>{
        console.log('match: ', match);
        return data[match.slice(1)]
    })
    console.log(res)
}
console.log(format(_token,data))
