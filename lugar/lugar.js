const axios = require('axios');

const getLugarLatLng = async(ciudad) => {

    let encodeUrl = encodeURI(ciudad);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para: ${ciudad}`);
    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}