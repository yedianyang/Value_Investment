/*
This module calculate the total property of the character and insert the newest number back to database.
And also calculate the annual salary insert back to the database.
*/
// const db = require('../db/queries')
const getCryptoPrice = require('../cryptocurrencyPrices')
const getHousePrice = require('../housePrices')
const mqttPub = require('../mqttSendDataToArduino')

//const num = db.getPortfolioTopicData("btc_num")
// const price = cpUpdate.getCryptoPriceFromAPI("eth")

// cpUpdate.getCryptoPriceFromAPI('btc').then(function (value) {
//console.log("Promise" + value);
// })



function calculateProperty() {
    const ethPrice = getCryptoPrice.getCryptoPriceFromAPI('eth')
    const btcPrice = getCryptoPrice.getCryptoPriceFromAPI('btc')
    const ethNum = db.getPortfolioTopicData('eth_num')
    const btcNum = db.getPortfolioTopicData('eth_num')
    const nftNum = db.getPortfolioTopicData('nft_num')
    const houseNum = db.getPortfolioTopicData('house_num')
    const apartmentNum = db.getPortfolioTopicData('apartment_num')
    const housePrice = getHousePrice.getHousePriceFromAPI()
    const carNum = db.getPortfolioTopicData('car_num')

    Promise.all([ethPrice, btcPrice, ethNum, btcNum, nftNum, houseNum, apartmentNum, housePrice, carNum]).then((value) => {
        //console.log(value);
        let ethPrice = value[0][1] * 6.4 //Price in CNY
        let btcPrice = value[1][1] * 6.4 //Price in CNY
        let ethNum = value[2][1]
        let btcNum = value[3][1]
        let nftNum = value[4][1]
        let houseNum = value[5][1]
        let apartmentNum = value[6][1]
        let housePrice = value[7][2]
        let carNum = value[8][1]

        let totalProperty = btcPrice * btcNum + ethPrice * ethNum + (houseNum * 3 * 100 + apartmentNum * 120) * housePrice + carNum * 0.2195 * 0.6;
        //Insert the neweset totalProperty back to database.
        db.insertNewPorfolioTopicData('property', totalProperty);
        mqttPub.publishMQTTMessage('property',totalProperty.toString())
        console.log((totalProperty / 10000).toFixed(2) + " ??????")
    })
}

function calculateAnnualSalary() {
    // const daily_salary = ;
    // const working_days_per_year = ;
    Promise.all([db.getPortfolioTopicData('daily_salary'), db.getPortfolioTopicData('working_days_per_year')]).then((value) => {
        // Promise.all([daily_salary,working_days_per_year]).then((value) => {
        console.log(value);
        let annual_salary = value[0][1] * value[1][1]
        db.insertNewPorfolioTopicData('annual_salary', annual_salary);
        mqttPub.publishMQTTMessage('annual_salary', annual_salary.toString())
        console.log('annual_salary is ' + annual_salary + ' ??????')
    })
}

module.exports ={
    calculateAnnualSalary,
    calculateProperty
}



