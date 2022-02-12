const updatePortfolio = require('./updatePortfolio')
const mqttPub = require('./mqttSendDataToArduino')

const fs = require('fs')

let rawdata = fs.readFileSync('./configuration.json')
let topicTerm = JSON.parse(rawdata)


updatePortfolio.RandomUpdatePortifolio(topicTerm.height)
updatePortfolio.RandomUpdatePortifolio(topicTerm.height)



// mqttPub.publishOneTopicMessage(topicTerm.height)
//  mqttPub.publishAllTopicMessage() //This for arduino depend on the requirement