/*
2021 - 5 - 7
*/
const bornYear = document.querySelector("#bornYear");
let lastBornYearFig = 0;

const bodyHeight = document.querySelector("#bodyHeight");
let lastHeightFig = 0;

const bodyWeight = document.querySelector("#bodyWeight");
let lastWeightFig = 0;

const bitCoin = document.querySelector("#bitcoinNum");
let lastbitCoinFig = 0;

const dogeCoin = document.querySelector("#dogecoinNum");
let lastdogeCoinFig = 0;

const apartment = document.querySelector("#apartmentNum");
let lastApartmentFig = 0;

const house = document.querySelector("#houseNum");
let lastHouseFig = 0;

const floor = document.querySelector("#floorNum");
let lastFloorFig = 0;

const car = document.querySelector("#car");
let lastCarFig = 0;

const totalMoney = document.querySelector("#totalMoney");
let lastTotalMoneyFig = 0;


const dailyEarn = document.querySelector("#dailyEarn");
let lastDailyEarnFig = 0;

const workDay = document.querySelector("#workDayNum");
let lastWorkDayFig = 0;

const yearEarn = document.querySelector("#yearEarn");
let lastYearEarnFig = 0;


const trip = document.querySelector("#tripNum");
let lastTripFig = 0;


// Basic Information
function changeBornYear() {
    let bornYearFig = parseInt(bornYear.innerHTML);
    let tmp = bornYearFig + getRandomInt(-1, 2);

    if (tmp != lastBornYearFig) {
        bornYear.classList.add("highlight");
        bornYear.innerHTML = tmp;
        setTimeout(() => {
            bornYear.classList.remove("highlight");
        }, 300)
    }
    lastBornYearFig = bornYearFig;
}

function changeHeight() {
    let heightFig = parseInt(bodyHeight.innerHTML);
    let tmp = heightFig + getRandomInt(-1, 2);

    if (tmp != lastHeightFig) {
        bodyHeight.classList.add("highlight");
        bodyHeight.innerHTML = tmp;
        setTimeout(() => {
            bodyHeight.classList.remove("highlight");
        }, 300)
    }
    lastHeightFig = heightFig;
}

function changeWeight() {
    let weightFig = parseInt(bodyWeight.innerHTML);
    let tmp = weightFig + getRandomInt(-1, 2);

    if (tmp != lastWeightFig) {
        bodyWeight.classList.add("highlight");
        bodyWeight.innerHTML = tmp;
        setTimeout(() => {
            bodyWeight.classList.remove("highlight");
        }, 300)
    }
    lastWeightFig = weightFig;
}



//Finance Information

function changeBitCoin() {
    let bitCoinFig = parseInt(bitCoin.innerHTML);
    let tmp = bitCoinFig + getRandomInt(-1, 2);

    if (tmp != lastbitCoinFig) {
        bitCoin.classList.add("highlight");
        bitCoin.innerHTML = tmp;
        setTimeout(() => {
            bitCoin.classList.remove("highlight");
        }, 300)
    }
    lastbitCoinFig = bitCoinFig;
}

function changeDogeCoin() {
    let dogeCoinFig = parseInt(dogeCoin.innerHTML);
    let tmp = dogeCoinFig + getRandomInt(-1000, 1000);

    if (tmp != lastdogeCoinFig) {
        dogeCoin.classList.add("highlight");
        dogeCoin.innerHTML = tmp;
        setTimeout(() => {
            dogeCoin.classList.remove("highlight");
        }, 200)
    }
    lastdogeCoinFig = dogeCoinFig;
}

function changApartment() {
    let apartmentFig = parseInt(apartment.innerHTML);
    let tmp = apartmentFig + getRandomInt(-1, 2);

    if (tmp != lastApartmentFig) {
        apartment.classList.add("highlight");
        apartment.innerHTML = tmp;
        setTimeout(() => {
            apartment.classList.remove("highlight");
        }, 200)
    }
    lastApartmentFig = apartmentFig;
}


function changHouse() {
    let houseFig = parseInt(house.innerHTML);
    let tmp = houseFig + getRandomInt(-1, 2);

    if (tmp != lastHouseFig) {
        house.classList.add("highlight");
        house.innerHTML = tmp;
        setTimeout(() => {
            house.classList.remove("highlight");
        }, 200)
    }
    lastHouseFig = houseFig;
}


function changFloor() {
    let floorFig = parseInt(floor.innerHTML);
    let tmp = floorFig + getRandomInt(-1, 2);

    if (tmp != lastFloorFig) {
        floor.classList.add("highlight");
        floor.innerHTML = tmp;
        setTimeout(() => {
            floor.classList.remove("highlight");
        }, 200)
    }
    lastFloorFig = floorFig;
}

function changCar() {
    let carFig = parseInt(car.innerHTML);
    let tmp = carFig + getRandomInt(-1, 1);

    if (tmp != lastCarFig) {
        car.classList.add("highlight");
        car.innerHTML = tmp;
        setTimeout(() => {
            car.classList.remove("highlight");
        }, 200)
    }
    lastCarFig = carFig;
}


function calculateTotalMoney() {
    let apartmentFig = parseInt(apartment.innerHTML);
    let bitCoinFig = parseInt(bitCoin.innerHTML);
    let dogeCoinFig = parseInt(dogeCoin.innerHTML);
    let houseFig = parseInt(house.innerHTML);
    let floorFig = parseInt(floor.innerHTML);
    let carFig = parseInt(car.innerHTML);

    let total = bitCoinFig * 55.6 + dogeCoinFig * 0.00038 + apartmentFig * 120 * 5 + houseFig * floorFig * 120 * 4 + carFig * 0.2195 * 0.6;


    let tmp = parseInt(total * 10) / 10;

    totalMoney.classList.add("highlight");
    totalMoney.innerHTML = tmp;
    setTimeout(() => {
        totalMoney.classList.remove("highlight");
    }, 200)
}


// Personal Earn habbit


function changeDailyEarn() {
    let dailyEarnFig = parseInt(dailyEarn.innerHTML);
    let tmp = dailyEarnFig + getRandomInt(-10, 30);

    if (tmp != lastDailyEarnFig) {
        dailyEarn.classList.add("highlight");
        dailyEarn.innerHTML = tmp;
        changeYearEarn();
        setTimeout(() => {
            dailyEarn.classList.remove("highlight");
        }, 200)
    }
    lastDailyEarnFig = dailyEarnFig;
}


function changeWorkDay() {
    let workDayFig = parseInt(workDay.innerHTML);
    let tmp = workDayFig + getRandomInt(-3, 3);

    if (tmp != lastWorkDayFig) {
        workDay.classList.add("highlight");
        workDay.innerHTML = tmp;
        changeYearEarn();
        setTimeout(() => {
            workDay.classList.remove("highlight");
        }, 200)
    }
    lastWorkDayFig = workDayFig;
}


function changeYearEarn() {
    let workDayFig = parseInt(workDay.innerHTML);
    let dailyEarnFig = parseInt(dailyEarn.innerHTML);
    let yearEarnFig = parseInt(workDayFig * dailyEarnFig / 1000) / 10;


    yearEarn.classList.add("highlight");
    yearEarn.innerHTML = yearEarnFig;
    setTimeout(() => {
        yearEarn.classList.remove("highlight");
    }, 200)

    lastYearEarnFig = yearEarnFig;
}


function changeTrip() {
    let tripFig = parseInt(trip.innerHTML);
    let tmp = tripFig + getRandomInt(-1, 2);

    if (tmp != lastTripFig) {
        trip.classList.add("highlight");
        trip.innerHTML = tmp;
        changeYearEarn();
        setTimeout(() => {
            trip.classList.remove("highlight");
        }, 200)
    }
    lastTripFig = tripFig;
}






// Companion

const companionHeight = document.querySelector("#companionHeight");
let lastCompanionHeightFig = 0;

const companionWeight = document.querySelector("#companionWeight");
let lastCompanionWeightFig = 0;


const compainScore = document.querySelector("#compainScore");
let lastCompainScoreFig = 0;

const companionWeightLimit = document.querySelector("#companionWeightLimit");
let lastCompanionWeightLimitFig = 0;

function changeCompanionHeight() {
    let companionHeightFig = parseInt(companionHeight.innerHTML);
    let tmp = companionHeightFig + getRandomInt(-1, 2);

    if (tmp != lastCompanionHeightFig) {
        companionHeight.classList.add("highlight");
        companionHeight.innerHTML = tmp;
        setTimeout(() => {
            companionHeight.classList.remove("highlight");
        }, 300)
    }
    lastCompanionHeightFig = companionHeightFig;
}

function changeCompanionWeight() {
    let companionWeightFig = parseInt(companionWeight.innerHTML);
    let tmp = companionWeightFig + getRandomInt(-1, 2) * 1000;

    if (tmp != lastCompanionWeightFig) {
        companionWeight.classList.add("highlight");
        companionWeight.innerHTML = tmp;
        setTimeout(() => {
            companionWeight.classList.remove("highlight");
        }, 300)
    }
    lastCompanionWeightFig = companionWeightFig;
}

function changeCompanionScore() {
    let companionScoreFig = parseInt(compainScore.innerHTML);
    let tmp = companionScoreFig + getRandomInt(-1, 2);

    if (tmp != lastCompainScoreFig) {
        compainScore.classList.add("highlight");
        compainScore.innerHTML = tmp;
        setTimeout(() => {
            compainScore.classList.remove("highlight");
        }, 300)
    }
    lastCompainScoreFig = companionScoreFig;
}

function changeCompanionWeightLimit() {
    let companionWeightFig = parseInt(companionWeight.innerHTML);
    let companionScoreFig = parseInt(compainScore.innerHTML);
    let companionHeightFig = parseInt(companionHeight.innerHTML);

    let tmp = companionWeightFig + Math.abs(companionScoreFig - 7) * 3000 + (companionHeightFig-165) * 1000;
    if (tmp != lastCompanionWeightLimitFig) {
        companionWeightLimit.classList.add("highlight");
        companionWeightLimit.innerHTML = tmp;
        setTimeout(() => {
            companionWeightLimit.classList.remove("highlight");
        }, 200)
    }
    lastCompanionWeightLimitFig = tmp;
}


//Personal Information
setInterval(() => {
    changeBornYear();
}, Math.random() * 5 * 1000);


setInterval(() => {
    changeHeight();
    changeWeight();
}, Math.random() * 20 * 1000);


//Money
setInterval(() => {
    changeBitCoin();
    changeDogeCoin();
    changCar();
    calculateTotalMoney();
}, Math.random() * 40 * 1000);

setInterval(() => {
    changApartment();
    changHouse();
    changFloor();
    calculateTotalMoney();
}, Math.random() * 100 * 1000);

//Timer
setInterval(() => {
    //Daily Earn
    changeDailyEarn();

}, Math.random() * 10 * 1000);


setInterval(() => {
    //Trip WorkDay
    changeTrip()
    changeWorkDay();
}, Math.random() * 20 * 1000);



setInterval(() => {
    // Companion
    changeCompanionHeight();
    changeCompanionWeight();
    changeCompanionScore();
    changeCompanionWeightLimit();
}, Math.random() * 10 * 1000);




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
