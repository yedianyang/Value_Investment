function getCryptoPriceFromAPI(coinName) {
    let option = {}
    if (coinName == 'btc') {
        option = btcOptions;
    } else if (coinName == 'eth') {
        option = ethOptions;
    }
    let promise = new Promise((resolve, reject) => {
        request(option, function (error, response) {
            if(error){
                resolve(0)
            }
            if (response.body[0] != '{') {
                console.log("RAW BODY have network connection problem")
                resolve(0)
            } else {
                let body = JSON.parse(response.body)
                console.log('body name: ' + body.data.name)
                console.log(Number(body.data.priceUsd))
                resolve(Number(body.data.priceUsd))
            }
        })
    })
    return promise
}