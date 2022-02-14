/*
Set up the configuration of the PostgreSQL connection
And function for get data from database and update new data to it.
*/
require('dotenv').config();

const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWD,
    post: process.env.DB_PORT
});

//Get data from zhangyong's sql. And print out to console.
function getPortfolioTopicData(topic) {

    let queryText = ''
    if (topic) {
        console.log('getting ' + topic + ' number from db.')
        queryText = `SELECT * FROM portfolio_test WHERE topic = '${topic}' ORDER BY record_at DESC`
    } else {
        //this line of code use for test query return of the database
        queryText = `SELECT * FROM portfolio_test ORDER BY record_at`
    }

    return new Promise((resolve, reject) => {
        pool.query(queryText, (error, results) => {
            if (error) {
                console.log(error)
            }
            console.log(results.rows[0].topic)
            console.log(results.rows[0].number)
            console.log('------------------------------')
            // return results.rows[0].number
            resolve([results.rows[0].topic, results.rows[0].number])
        })
    })
}

function insertNewPorfolioTopicData(topic, number) {
    let insertTest = ''
    //console.log("2. Insert Start")
    if (topic) {
        insertTest = `INSERT INTO portfolio_test (topic, number) VALUES('${topic}',${number})`
        pool.query(insertTest, (error, results) => {
            if (error) {
                console.log(error)
            }
        })
    }
}

function getAllPortfolioTopicData() {
    let queryText = `SELECT DISTINCT ON (topic)
	topic,
	number,
	record_at
FROM
	portfolio_test
ORDER BY
	topic,
	record_at DESC`

    return new Promise((resolve, reject) => {
        pool.query(queryText, (error, results) => {
            if (error) {
                console.log(error)
            }
            resolve(results.rows);
        })
    })
}


module.exports = {
    getPortfolioTopicData, 
    getAllPortfolioTopicData,
    insertNewPorfolioTopicData
}


// getPortfolioTopicData('weight').then((value)=>{})
// getAllPortfolioTopicData().then((value)=>{
//     console.log(value)
// })
