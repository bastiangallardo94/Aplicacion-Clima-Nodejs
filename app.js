const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {

//         clima.getClima(resp.lat, resp.lng)
//             .then(respuesta => {
//                 console.log(`La temperatura en ${resp.direccion} es de: ${respuesta}`);
//             })
//             .catch(e => {
//                 console.log(e);
//             })
//     })
//     .catch(e => {
//         console.log(e);
//     })

let getInfo = async(direccion) => {


    try {

        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima en ${coordenadas.direccion} es de: ${temp}`

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}


getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => {
        console.log('Error' + e);
    })