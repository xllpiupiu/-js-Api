function getWeek(year, month, day) {
    let date1 = new Date(year, 0, 1)
    let date2 = new Date(year, month - 1, day, 1)
    let weektest = new Date('2021-01-12')
    let weekMs = 7 * 24 * 60 * 60 * 1000
    let firstDay = (7 - date1.getDay()) * (24 * 60 * 60 * 1000)
    let week = Math.ceil((date2.getTime() - date1.getTime() - firstDay) / weekMs) + 1;
    return week
}
getWeek('2021', '10', '13')
