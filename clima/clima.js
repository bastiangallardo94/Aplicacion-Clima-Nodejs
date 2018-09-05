const axios = require('axios');


const getClima = async(latitud, longitud) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=fd08d7ce877fbee0920c2310380a285f`)
    let temperatura = resp.data.main.temp;
    return temperatura;
}


module.exports = {
    getClima
}