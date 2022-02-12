require('dotenv').config()
const mqtt = require('mqtt');
const db = require('./db/queries')
const client = mqtt.connect(process.env.MQTT_SERVER);


function publishOneTopicMessage(jsonObj) {
    console.log("connecting mqtt broker.....")
    client.on('connect', function () {
        console.log()
        setInterval(() => {
            db.getPortfolioTopicData(jsonObj.topic).then((value) => {
                console.log('send begin')
                client.publish('zhangyong/' + jsonObj.topic, value[1].toString())
                console.log('send end')
                //client.end();
            })
        }, jsonObj.period)
    })
}

function publishAllTopicMessage() {
    console.log("connecting mqtt broker.....")
    client.on('connect', function () {
        console.log()
        setInterval(() => {
            db.getAllPortfolioTopicData().then((value) => {
                console.log('send begin')
                console.log(typeof(value))
                let jsonString = JSON.stringify(value)
                // console.log('type of json String is ' + typeof(jsonString))
                // console.log(jsonString)
                client.publish('zhangyong/all', jsonString)
                console.log('send end')
                //client.end();
            })
        }, 1000)
    })

}



module.exports = {
    publishOneTopicMessage,
    publishAllTopicMessage
}

