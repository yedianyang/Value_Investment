const updatePortfolio = require('./updatePortfolio')
const mqttPub = require('./mqttSendDataToArduino')

const fs = require('fs')

let rawdata = fs.readFileSync('./configuration.json')
let topicTerm = JSON.parse(rawdata)


updatePortfolio.RandomUpdatePortifolio(topicTerm.height)
updatePortfolio.RandomUpdatePortifolio(topicTerm.weight)
updatePortfolio.RandomUpdatePortifolio(topicTerm.birth_year)
updatePortfolio.RandomUpdatePortifolio(topicTerm.daily_salary)
updatePortfolio.RandomUpdatePortifolio(topicTerm.working_days_per_year)
updatePortfolio.RandomUpdatePortifolio(topicTerm.btc_num)
updatePortfolio.RandomUpdatePortifolio(topicTerm.eth_num)
updatePortfolio.RandomUpdatePortifolio(topicTerm.apartment_num)
updatePortfolio.RandomUpdatePortifolio(topicTerm.house_num)
updatePortfolio.RandomUpdatePortifolio(topicTerm.house_floor_num)
updatePortfolio.RandomUpdatePortifolio(topicTerm.car_num)
updatePortfolio.RandomUpdatePortifolio(topicTerm.ntf_num)
updatePortfolio.RandomUpdatePortifolio(topicTerm.trip_per_year)
updatePortfolio.calculateAnnualSalary();
updatePortfolio.calculateProperty();



// mqttPub.publishOneTopicMessage(topicTerm.height)
//  mqttPub.publishAllTopicMessage() //This for arduino depend on the requirement