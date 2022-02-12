const request = require('request');

const option = {
    'method': 'GET',
    'url': 'https://www.creprice.cn/city/fs.html#miao',
    'headers': {
    }
}


function getHousePriceFromAPI() {

    let promise = new Promise((resolve, reject) => {
        
        request(option, function (error, response) {
            if (error) {
                console.log("we fucked, cause by the internet")
                //Hard coding the house price in case that the internet doesn't work
                //Update in 2021/12/19
                resoleve(['house_price', 16270,15698,17300])
            } else {
                let resNum = ['house_price'];
                //console.log(response.body)
                res = response.body.match(/\<span class="value">(.*?)<\/span>/g)
                //Return three number, which stand for [last month price, today price, next month prediction]
                for (let i = 0; i < res.length; i++) {
                    resNum[i+1] = parseInt(res[i].replace(/[^0-9]/ig, ""))
                }
                resolve(resNum)
            }
        })
    })
    return promise
}

module.exports = {
    getHousePriceFromAPI,
}