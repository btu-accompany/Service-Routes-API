const fs = require('fs');


const stationList = () => {
    try {
        const data_buffer = fs.readFileSync("./utils/duraklar.json")
        const data_object = JSON.parse(data_buffer.toString())
        return data_object
    } catch (error) {
        return []
    }
}

module.exports = { stationList: stationList }