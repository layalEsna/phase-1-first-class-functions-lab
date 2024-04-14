// Code your solution in this file!
const returnFirstTwoDrivers = function () {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

    const dr = drivers.slice(0, 2)
    return dr
}

const returnLastTwoDrivers = () => {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    const dr = drivers.slice(2)
    return dr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function fareDoubler(num) {
    return num * 2
}


const fareTripler = (num) => {
    return num * 3
}

function createFareMultiplier(num) {

    return function (fare) {
        return fare * num
    }


}

function selectDifferentDrivers(arrayOfDrivers, fn) {

    return fn(arrayOfDrivers)
}




