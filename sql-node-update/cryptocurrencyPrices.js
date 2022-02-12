/*
This module get btc and eth price from coinap.
And return a promise include the name of the coin and the price number
*/

const request = require('request');
const btcOptions = {
    'method': 'GET',
    'url': 'https://api.coincap.io/v2/assets/bitcoin',
    'headers': {
    }
};
const ethOptions = {
    'method': 'GET',
    'url': 'https://api.coincap.io/v2/assets/ethereum',
    'headers': {
    }
};

function getCryptoPriceFromAPI(coinName) {
    let option = {}
    if (coinName == 'btc') {
        option = btcOptions;
    } else if (coinName == 'eth') {
        option = ethOptions;
    }

    let promise = new Promise((resolve, reject) => {
        request(option, function (error, response) {
            if (error) {
                console.log("RAW BODY have network connection problem")
                resolve([coinName, 0])
            }
            if (response.body[0] != '{') {
                console.log("200 request limiter reached")
                resolve([coinName, 0])
            } else {
                let body = JSON.parse(response.body)
                //console.log('body name: ' + body.data.name)
                //  console.log(Number(body.data.priceUsd))
                resolve([body.data.name, Number(body.data.priceUsd)])
            }
        })
    })
    return promise
}

module.exports = {
    getCryptoPriceFromAPI,
}                           