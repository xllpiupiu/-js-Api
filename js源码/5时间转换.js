const formaDate1 = function(time) {
    const data = new Date(time);
    let year = data.getFullYear();
    let month = data.getMonth()+1;
    let day = data.getDate();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();
    return `${year}年:${month}月:${day}天:${hour}小时:${minute}分:${second}秒`
}
console.log(formaDate1(222222222222222))