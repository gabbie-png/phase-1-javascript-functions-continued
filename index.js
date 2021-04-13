// Your code here
function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
    
}
saturdayFun();

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`

}
mondayWork();

function wrapAdjective(thing = "*"){
    return function thingAdjective(something = "special"){
        return `You are ${thing}${something}${thing}!`
    }
}
wrapAdjective();