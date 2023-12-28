function saturdayFun(day = 'roller-skate') {
    return `This Saturday, I want to ${day}!`
}

function mondayWork(day = 'go to the office') {
    return `This Monday, I will ${day}.`
}
function wrapAdjective(highlight = '*') {
    return function (worker = "a hard worker") {
        return `You are ${highlight}${worker}${highlight}!`
    }

}