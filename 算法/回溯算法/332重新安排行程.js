//332 重新安排行程
let tickets = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
 var findItinerary = function (tickets) {
    //使用map记录from->to 机票数
    let targets = {}
    for (let item of tickets) {
        if (!targets[item[0]]) {
            targets[item[0]] = []
        }
        targets[item[0]].push(item[1]);
    }
    
    for(const item of Object.keys(targets)) {
        targets[item].sort();
    }
    let res = [];
    res.push('JFK')
    const backTracking = function(curFrom){
        if(res.length===tickets.length+1) return true;
        let nextCities = targets[curFrom];
        if(!nextCities || nextCities.length===0) {
            return false;
        }
        for(let i=0;i<nextCities.length;i++) {
            let next = nextCities[i];
            nextCities.splice(i,1);
            res.push(next);
            if(backTracking(res[res.length-1])) return true;
            nextCities.splice(i,0,next);
            res.pop();
        }
    }
    backTracking(res[res.length-1])
    return res;
}

