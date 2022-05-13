const express = require('express');
const { stationList } = require('./utils/guzergah');

const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
    try {
        const station = stationList()
        res.json(station)
    } catch (err) {
        res.json({ message: err })
    }
})

app.listen(port, () => {
    console.log(port + ". portta çalışıyor");
});