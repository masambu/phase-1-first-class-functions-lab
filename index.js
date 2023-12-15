// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2)
}
console.log(returnFirstTwoDrivers(drivers))




const returnLastTwoDrivers = function () {
    return drivers.slice(2)
}
console.log(returnLastTwoDrivers(drivers))




let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]




function createFareMultiplier(fare) {
    return function () {
       return fare * fare
    }
}
console.log(createFareMultiplier(4))




const fareDoubler = function (fare) {
    return fare * 2
 }
console.log(fareDoubler(25))




const fareTripler = fare => fare * 3
console.log(fareTripler(3))




function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}


