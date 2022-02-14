const updatePortfolio = require('./updatePortfolio')
const mqttPub = require('./mqttSendDataToArduino')

const fs = require('fs')

let rawdata = fs.readFileSync('./configuration.json')
let topicTerm = JSON.parse(rawdata)



console.log("1. birthyear")
updatePortfolio.RandomUpdatePortifolio(topicTerm.birth_year)
console.log("2. height")
updatePortfolio.RandomUpdatePortifolio(topicTerm.height)
console.log("3. weight")
updatePortfolio.RandomUpdatePortifolio(topicTerm.weight)
console.log("4. daily_salary")
updatePortfolio.RandomUpdatePortifolio(topicTerm.daily_salary)
console.log("5. working_days_per_year")
updatePortfolio.RandomUpdatePortifolio(topicTerm.working_days_per_year)
console.log("6. btc_num")
updatePortfolio.RandomUpdatePortifolio(topicTerm.btc_num)
console.log("7. eth_num")
updatePortfolio.RandomUpdatePortifolio(topicTerm.eth_num)
console.log("8. apartmentr_num")
updatePortfolio.RandomUpdatePortifolio(topicTerm.apartment_num)
console.log("9. house_num")
updatePortfolio.RandomUpdatePortifolio(topicTerm.house_num)
console.log("10. house_floor_num")
updatePortfolio.RandomUpdatePortifolio(topicTerm.house_floor_num)
console.log("11. car_num")
updatePortfolio.RandomUpdatePortifolio(topicTerm.car_num)
console.log("12. nft_num")
updatePortfolio.RandomUpdatePortifolio(topicTerm.ntf_num)
console.log("13. trip_per_year")
updatePortfolio.RandomUpdatePortifolio(topicTerm.trip_per_year)
console.log("14. annualSalary")
updatePortfolio.calculateAnnualSalary();
console.log("15. calculateProperty")
updatePortfolio.calculateProperty();



// mqttPub.publishOneTopicMessage(topicTerm.height)
//  mqttPub.publishAllTopicMessage() //This for arduino depend on the requirement